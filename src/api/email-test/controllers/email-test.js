'use strict';

module.exports = {
  async send(ctx) {
    await strapi.plugin('email').service('email').send({
      to: 'test@gmail.com',
      subject: 'Strapi Mailtrap Test',
      html: `
        <h2>Email Working</h2>
        <p>This email is sent from Strapi.</p>
      `,
    });

    return { message: 'Email sent' };
  },
};
