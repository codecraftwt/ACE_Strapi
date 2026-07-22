//@ts-nocheck
'use strict';

const { errors } = require('@strapi/utils');

const { ValidationError } = errors;

const { loadAdminUser } = require('./helpers/get-admin-user');
const { validateDepartmentAccess } = require('./helpers/access-control');
const { extractDepartmentDocumentId } = require('./helpers/extract-document-id');
const { isSuperAdmin, isHod } = require('./helpers/role-check');
const { getAdminDepartment } = require('./helpers/get-admin-department');
const { runSeeders } = require('./seed');

const DEPARTMENT_UID = 'api::department.department';

/*
 * Add every content type that should be protected
 * by department-based access.
 */
const PROTECTED_CONTENT_TYPES = [
  'api::students-admission.students-admission',
  'api::notice.notice',
  'api::cutoff.cutoff',
  'api::placement.placement',
  'api::student.student',
  'api::course.course',
  'api::faculty.faculty',
  'api::faculty-leave.faculty-leave',
  'api::testimonial.testimonial',
];

module.exports = {

  register() {
    console.log('Strapi Register Completed');
  },

  async bootstrap({ strapi }) {

    console.log('=======================================');
    console.log('Department Access Middleware Loaded');
    console.log('=======================================');

    /*
     * Global Document Middleware
     */
    strapi.documents.use(async (context, next) => {

      /*
       * Skip content types that are not protected.
       */
      if (!PROTECTED_CONTENT_TYPES.includes(context.uid)) {
        return next();
      }

      /*
       * Only intercept create/update operations.
       */
      if (
        context.action !== 'create' &&
        context.action !== 'update'
      ) {
        return next();
      }

      const data = context.params?.data;

      if (!data) {
        return next();
      }

      /*
       * Logged-in Admin User
       */
      const requestContext = strapi.requestContext.get();

      const requestUser = requestContext?.state?.user;

      let adminUser = null;

      if (requestUser?.id) {
        adminUser = await loadAdminUser(
          strapi,
          requestUser.id
        );
      }

      /*
       * Validate Department Access
       */
      await validateDepartmentAccess({
        strapi,
        context,
        adminUser,
      });

      /*
       * Continue with department validation...
       * (Part 2)
       */
            /*
       * Resolve selected department
       */
      let selectedDepartmentDocumentId =
        extractDepartmentDocumentId(data.department);

      /*
       * On update, the department may not be present
       * if only another field is edited.
       */
      if (
        !selectedDepartmentDocumentId &&
        context.action === 'update' &&
        context.params?.documentId
      ) {
        const existingDocument = await strapi
          .documents(context.uid)
          .findOne({
            documentId: context.params.documentId,
            populate: {
              department: true,
            },
          });

        selectedDepartmentDocumentId =
          existingDocument?.department?.documentId;
      }

      if (!selectedDepartmentDocumentId) {
        throw new ValidationError(
          'Department is required.'
        );
      }

      /*
       * Verify department exists.
       */
      const selectedDepartment = await strapi
        .documents(DEPARTMENT_UID)
        .findOne({
          documentId: selectedDepartmentDocumentId,
        });

      if (!selectedDepartment) {
        throw new ValidationError(
          'Selected department does not exist.'
        );
      }

      /*
       * Automatically synchronize accessDepartmentKey
       * if the content type has this field.
       */
      data.accessDepartmentKey =
          selectedDepartment.documentId;

      console.log({
        action: context.action,
        uid: context.uid,
        department: selectedDepartment.deptName,
      });

      return next();

    });

    /*
     * Register Same Department RBAC Condition
     * (Part 3)
     */
        await strapi.admin.services.permission.conditionProvider.register({
      displayName: 'Same Department',
      name: 'same-department',
      category: 'Department Restrictions',

      async handler(admin) {
        try {

          const adminUser = await loadAdminUser(
            strapi,
            admin?.id
          );

          if (!adminUser) {
            return false;
          }

          /*
           * Super Admin
           */
          if (isSuperAdmin(adminUser)) {
            return true;
          }

          /*
           * Apply only for HOD.
           * (Later you can add Faculty here)
           */
          if (!isHod(adminUser)) {
            return false;
          }

          const department =
            await getAdminDepartment(
              strapi,
              adminUser
            );

          if (!department?.documentId) {
            return false;
          }

          /*
           * Every protected content type should
           * contain accessDepartmentKey.
           */
           return {
            department: {
              documentId: {
                $eq: department.documentId,
              },
            },
          };

        } catch (err) {
          console.error(
            'Same Department Condition Error',
            err
          );

          return false;
        }
      },
    });

    console.log(
      '✅ Same Department RBAC Registered'
    );

    /*
     * Database Seeding
     * Set FORCE_SEED=true to seed resources.
     */
    if (process.env.FORCE_SEED !== 'true') {
      console.log(
        'Database seeding is disabled. Start with FORCE_SEED=true to seed.'
      );
    } else {
      await runSeeders(strapi);
    }

  },

};