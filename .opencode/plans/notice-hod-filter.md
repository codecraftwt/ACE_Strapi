# Notice HOD Filter Implementation

## File to modify: `src/extensions/content-manager/strapi-server.js`

Replace the entire file with this content:

```js
'use strict';

async function findHODFaculty(email) {
  const faculties = await strapi.entityService.findMany('api::faculty.faculty', {
    filters: {
      Email: { $eq: email },
      designation: { $eq: 'HOD' },
    },
    populate: ['department'],
    limit: 1,
  });

  const faculty = faculties[0];
  if (!faculty || !faculty.department) return null;
  return faculty;
}

async function applyHODFilter(ctx) {
  const applicableModels = ['api::student.student', 'api::notice.notice'];
  if (!applicableModels.includes(ctx.params.model)) return;

  const user = ctx.state.user;
  if (!user || !user.email) return;

  const faculty = await findHODFaculty(user.email);
  if (!faculty) return;

  ctx.query = {
    ...ctx.query,
    filters: {
      ...ctx.query.filters,
      department: {
        documentId: faculty.department.documentId,
      },
    },
  };
}

async function applyHODCreateUpdate(ctx) {
  if (ctx.params.model !== 'api::notice.notice') return;

  const user = ctx.state.user;
  if (!user || !user.email) return;

  const faculty = await findHODFaculty(user.email);
  if (!faculty) return;

  ctx.request.body.data = {
    ...ctx.request.body.data,
    department: faculty.department.documentId,
  };
}

async function applyHODConfigurationOverride(ctx) {
  if (ctx.params.uid !== 'api::notice.notice') return;

  const user = ctx.state.user;
  if (!user || !user.email) return;

  const faculty = await findHODFaculty(user.email);
  if (!faculty) return;

  const metadatas = ctx.body?.data?.contentType?.metadatas;
  if (metadatas && metadatas.department) {
    metadatas.department.edit.editable = false;
  }
}

module.exports = (plugin) => {
  const ctrl = plugin.controllers['collection-types'];

  const originalFind = ctrl.find;
  const originalFindOne = ctrl.findOne;
  const originalCreate = ctrl.create;
  const originalUpdate = ctrl.update;
  const originalGetConfiguration = plugin.controllers['content-types']?.findContentTypeConfiguration;

  ctrl.find = async (ctx) => {
    await applyHODFilter(ctx);
    return originalFind(ctx);
  };

  ctrl.findOne = async (ctx) => {
    await applyHODFilter(ctx);
    return originalFindOne(ctx);
  };

  ctrl.create = async (ctx) => {
    await applyHODCreateUpdate(ctx);
    return originalCreate(ctx);
  };

  ctrl.update = async (ctx) => {
    if (ctx.params.model === 'api::notice.notice') {
      const user = ctx.state.user;
      if (user && user.email) {
        const faculty = await findHODFaculty(user.email);
        if (faculty) {
          const existing = await strapi.entityService.findOne('api::notice.notice', ctx.params.id, {
            populate: ['department'],
          });
          if (existing && existing.department && existing.department.documentId !== faculty.department.documentId) {
            return ctx.forbidden('You cannot update a notice from another department');
          }
        }
      }
    }
    await applyHODCreateUpdate(ctx);
    return originalUpdate(ctx);
  };

  if (originalGetConfiguration) {
    plugin.controllers['content-types'].findContentTypeConfiguration = async (ctx) => {
      await originalGetConfiguration(ctx);
      await applyHODConfigurationOverride(ctx);
    };
  }

  return plugin;
};
```

## Manual Admin Panel Setup

1. **Settings → Administration Panel → Roles → [HOD role] → Department → enable Read**
2. **Settings → Administration Panel → Roles → [HOD role] → Notice → set Read, Create, Update as needed**
3. Restart Strapi after applying the code change

## Behavior

| Scenario | Expected Behavior |
|----------|------------------|
| **Notice list view** (HOD) | Only notices from HOD's department |
| **Notice create form** (HOD) | Department field disabled (greyed out), empty; auto-set on save |
| **Notice edit form** (HOD) | Department field disabled, shows existing value |
| **Update notice from another dept** (HOD) | 403 Forbidden |
| **Super Admin** | Full access, department field editable, no filtering |
