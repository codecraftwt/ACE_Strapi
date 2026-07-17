//@ts-nocheck
'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/attendances/bulk',
      handler: 'attendance.bulkCreate',
      config: { policies: [], middlewares: [] },
    },
    {
      method: 'PUT',
      path: '/attendances/bulk-update',
      handler: 'attendance.bulkUpdate',
      config: { policies: [], middlewares: [] },
    },
    {
      method: 'POST',
      path: '/attendances/bulk-delete',
      handler: 'attendance.bulkDelete',
      config: { policies: [], middlewares: [] },
    },
  ],
};
