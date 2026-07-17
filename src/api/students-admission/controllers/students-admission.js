// @ts-nocheck
'use strict';

/**
 * students-admission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { errors } = require('@strapi/utils');

const { ValidationError } = errors;

const validateAdmissionData = (data, isUpdate = false) => {
  if (!data) {
    throw new ValidationError('Admission data is required.');
  }

  // Full name
  if (!isUpdate || data.fullName !== undefined) {
    const fullName =
      typeof data.fullName === 'string'
        ? data.fullName.trim()
        : '';

    if (!fullName) {
      throw new ValidationError('Full name is required.', {
        field: 'fullName',
      });
    }

    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      throw new ValidationError(
        'Full name must contain only letters and spaces.',
        {
          field: 'fullName',
        }
      );
    }

    if (fullName.length < 2 || fullName.length > 100) {
      throw new ValidationError(
        'Full name must be between 2 and 100 characters.',
        {
          field: 'fullName',
        }
      );
    }

    data.fullName = fullName;
  }

  // Date of birth
  if (!isUpdate || data.dateOfBirth !== undefined) {
    if (!data.dateOfBirth) {
      throw new ValidationError('Date of birth is required.', {
        field: 'dateOfBirth',
      });
    }

    const dateOfBirth = new Date(`${data.dateOfBirth}T00:00:00`);

    if (Number.isNaN(dateOfBirth.getTime())) {
      throw new ValidationError(
        'Please enter a valid date of birth.',
        {
          field: 'dateOfBirth',
        }
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dateOfBirth > today) {
      throw new ValidationError(
        'Date of birth cannot be in the future.',
        {
          field: 'dateOfBirth',
        }
      );
    }
  }

  // Gender
  if (!isUpdate || data.Gender !== undefined) {
    const allowedGenders = ['Male', 'Female', 'Other'];

    if (!allowedGenders.includes(data.Gender)) {
      throw new ValidationError('Please select a valid gender.', {
        field: 'Gender',
        allowedValues: allowedGenders,
      });
    }
  }

  // Address
  if (!isUpdate || data.address !== undefined) {
    const address =
      typeof data.address === 'string'
        ? data.address.trim()
        : '';

    if (!address) {
      throw new ValidationError('Address is required.', {
        field: 'address',
      });
    }

    if (address.length < 5 || address.length > 150) {
      throw new ValidationError(
        'Address must be between 5 and 150 characters.',
        {
          field: 'address',
        }
      );
    }

    data.address = address;
  }

  // Department
  if (!isUpdate || data.department !== undefined) {
    if (!data.department) {
      throw new ValidationError('Department is required.', {
        field: 'department',
      });
    }
  }

  // Course
  if (!isUpdate || data.course !== undefined) {
    if (!data.course) {
      throw new ValidationError('Course is required.', {
        field: 'course',
      });
    }
  }

  // Admission status
  if (data.admissionStatus !== undefined) {
    const allowedStatuses = [
      'Pending',
      'Approved',
      'Rejected',
      'Waitlisted',
    ];

    if (!allowedStatuses.includes(data.admissionStatus)) {
      throw new ValidationError(
        'Please select a valid admission status.',
        {
          field: 'admissionStatus',
          allowedValues: allowedStatuses,
        }
      );
    }
  }

  // Payment status
  if (data.paymentStatus !== undefined) {
    const allowedPaymentStatuses = [
      'Pending',
      'Paid',
      'Failed',
      'Refunded',
    ];

    if (!allowedPaymentStatuses.includes(data.paymentStatus)) {
      throw new ValidationError(
        'Please select a valid payment status.',
        {
          field: 'paymentStatus',
          allowedValues: allowedPaymentStatuses,
        }
      );
    }
  }
};

module.exports = createCoreController(
  'api::students-admission.students-admission',
  () => ({
    async create(ctx) {
      const data = ctx.request.body?.data;

      validateAdmissionData(data);

      // Do not trust the initial status sent by the frontend.
      data.admissionStatus = 'Pending';
      data.paymentStatus = data.paymentStatus || 'Pending';

      return await super.create(ctx);
    },

    async update(ctx) {
      const data = ctx.request.body?.data;

      validateAdmissionData(data, true);

      return await super.update(ctx);
    },
  })
);