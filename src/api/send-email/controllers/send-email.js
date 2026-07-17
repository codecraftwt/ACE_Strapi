'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::send-email.send-email',
  ({ strapi }) => ({

    async sendStudentEmail(ctx) {

      const { studentId } = ctx.request.body;

      const student = await strapi.db
        .query('api::student.student')
        .findOne({
          where: { documentId: studentId },
          populate: {
            department: true,
            course: true,
            send_email: true,
          },
        });

      if (!student) {
        return ctx.notFound('Student not found');
      }

      const template = student.send_email;

      if (!template) {
        return ctx.badRequest('Email template not assigned to this student');
      }

      const departmentName = student.department?.deptName || 'N/A';
      const courseName = student.course?.courseName || 'N/A';
      const year = new Date().getFullYear();

      await strapi.plugin('email')
        .service('email')
        .send({
          to: student.Email,
          subject: template.subject || 'Admission Enquiry Response',

          html: `
<!DOCTYPE html>
<html>
<head>
<style>

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f6f8;
    margin: 0;
    padding: 20px;
}

.email-container {
    max-width: 650px;
    margin: auto;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.header {
    background: linear-gradient(135deg, #1e3a8a, #2563eb);
    color: #ffffff;
    padding: 30px;
    text-align: center;
}

.header h1 {
    margin: 0;
    font-size: 26px;
}

.header p {
    margin-top: 8px;
    font-size: 15px;
}


.content {
    padding: 30px;
    color: #333333;
    line-height: 1.7;
}


.greeting {
    font-size: 17px;
}


.details {
    background: #f8fafc;
    border-left: 4px solid #2563eb;
    padding: 20px;
    margin: 25px 0;
    border-radius: 6px;
}


.details h3 {
    margin-top: 0;
    color: #1e3a8a;
}


.details p {
    margin: 10px 0;
}


.response-box {
    background: #eff6ff;
    padding: 20px;
    border-radius: 6px;
    margin-top: 20px;
}


.footer {
    background: #f1f5f9;
    padding: 20px;
    text-align: center;
    color: #555;
    font-size: 13px;
}


.contact {
    margin-top: 25px;
}


</style>
</head>


<body>


<div class="email-container">


    <div class="header">

        <h1>
            Aurora College of Engineering
        </h1>

        <p>
            Admission Department
        </p>

    </div>



    <div class="content">


        <p class="greeting">
            Dear <strong>${student.Name}</strong>,
        </p>


        <p>
            Thank you for showing interest in 
            <strong>Aurora College of Engineering</strong>.
            We appreciate you reaching out to us regarding admission opportunities.
        </p>


        <p>
            We have successfully received your admission enquiry.
            Our admission team has reviewed your request and is pleased to provide
            you with the necessary information regarding your selected program.
        </p>



        <div class="details">

            <h3>
                Your Admission Enquiry Details
            </h3>


            <p>
                <strong>Student Name:</strong>
                ${student.Name}
            </p>


            <p>
                <strong>Department:</strong>
                ${departmentName}
            </p>


            <p>
                <strong>Chosen Course:</strong>
                ${courseName}
            </p>


          


        </div>




        <div class="response-box">


            <h3>
                Response From ${departmentName} Department
            </h3>


            <p>
                ${template.msg}
            </p>


        </div>



        <p>
            Our admission counselors are available to assist you with any further
            queries related to admission process, eligibility criteria, course
            structure, fees, scholarships, and other academic requirements.
        </p>



        <p>
            We look forward to welcoming you to 
            <strong>Aurora College of Engineering</strong> and supporting you
            throughout your academic journey.
        </p>



        <div class="contact">

            <p>
                Regards,
            </p>

            <p>
                <strong>Admission Team</strong><br>
                Aurora College of Engineering<br>
                Admission Department<br>
                Email: admissions@auroracollege.edu<br>
                Phone: +91 XXXXX XXXXX
            </p>

        </div>



    </div>




    <div class="footer">

        © ${year} Aurora College of Engineering. All Rights Reserved.

    </div>


</div>


</body>
</html>
          `,
        });

      return { message: 'Email sent successfully' };
    },

  })
);
