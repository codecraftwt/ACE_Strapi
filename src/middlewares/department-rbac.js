// @ts-nocheck
'use strict';

/**
 * Department Based RBAC Middleware
 *
 * Works with Strapi Admin Content Manager
 *
 * Rules:
 * - Super Admin -> Full access
 * - HOD -> Only own department content
 * - Any Content Type having department relation is protected
 * - Automatically works for future Content Types
 */


async function findHODFaculty(email, strapi) {

  if (!email) return null;


  // Find faculty using Email
  const faculty = await strapi.db
    .query('api::faculty.faculty')
    .findOne({
      where: {
        Email: {
          $eqi: email,
        },
        designation: 'HOD',
      },
      populate: {
        department: true,
      },
    });


  if (
    faculty &&
    faculty.department
  ) {
    return faculty;
  }



  // Fallback using users-permissions relation

  const apiUser = await strapi.db
    .query('plugin::users-permissions.user')
    .findOne({
      where: {
        email: {
          $eqi: email,
        },
      },
    });


  if (!apiUser) return null;



  const facultyByUser =
    await strapi.db
      .query('api::faculty.faculty')
      .findOne({
        where: {
          users_permissions_user: apiUser.id,
          designation: 'HOD',
        },
        populate:{
          department:true,
        },
      });


  return facultyByUser || null;
}





function isSuperAdmin(user){

  return user?.roles?.some(
    role =>
      role.code === 'strapi-super-admin'
  );

}





function isHODAdmin(user){

  return user?.roles?.some(
    role =>
      role.name === 'HOD'
  );

}





function getBodyData(ctx){

  if(!ctx.request.body){
    ctx.request.body={};
  }


  if(!ctx.request.body.data){
    ctx.request.body.data={};
  }


  return ctx.request.body.data;

}





function forceDepartment(ctx, departmentId, action){

  const data = getBodyData(ctx);


  if(action === 'create'){

    data.department={
      connect:[
        departmentId
      ]
    };

  }


  if(action === 'update'){

    data.department={
      set:[
        departmentId
      ]
    };

  }


  ctx.request.body.data=data;

}





function applyDepartmentFilter(
  ctx,
  departmentId
){

  ctx.query =
    ctx.query || {};


  const oldFilters =
    ctx.query.filters || {};



  ctx.query.filters={

    $and:[

      oldFilters,

      {
        department:{
          documentId:{
            $eq:departmentId
          }
        }
      }

    ]

  };

}





module.exports = (
  config,
  {strapi}
)=>{


return async(ctx,next)=>{


  const urlPath =
    ctx.request.url.split('?')[0];


  const method =
    ctx.request.method;



  /**
   * Detect Content Manager Request
   */

  const match =
    urlPath.match(
      /^\/content-manager\/collection-types\/(api::[a-z0-9-]+\.[a-z0-9-]+)(\/([^/]+))?$/
    );



  if(!match){

    return next();

  }



  const uid =
    match[1];


  const documentId =
    match[3];



  /**
   * Detect action
   */

  let action=null;


  if(method==="GET")
    action="read";


  if(method==="POST")
    action="create";


  if(method==="PUT")
    action="update";



  if(!action){

    return next();

  }




  console.log("==============================");
  console.log("Department RBAC Check");
  console.log("Content Type:",uid);
  console.log("Action:",action);
  console.log("==============================");





  const user =
    ctx.state.user;



  if(!user || !user.email){

    return next();

  }





  /**
   * Super Admin bypass
   */

  if(isSuperAdmin(user)){


    console.log(
      "✅ Super Admin Access"
    );


    return next();

  }





  /**
   * Only HOD restriction
   */

  if(!isHODAdmin(user)){


    return next();

  }





  const faculty =
    await findHODFaculty(
      user.email,
      strapi
    );



  if(
    !faculty ||
    !faculty.department ||
    !faculty.department.documentId
  ){

    return ctx.forbidden(
      "No HOD department assigned"
    );

  }





  const departmentId =
    faculty.department.documentId;





  /**
   * Check if this Content Type
   * has department relation
   */


  const contentType =
    strapi.contentType(uid);



  if(
    !contentType ||
    !contentType.attributes.department
  ){

    return next();

  }





  console.log(
    "Department:",
    faculty.department.deptName
  );





  /**
   * CREATE
   */

  if(action==="create"){


    forceDepartment(
      ctx,
      departmentId,
      "create"
    );


    return next();

  }







  /**
   * UPDATE
   */

  if(action==="update"){



    const existing =
      await strapi.db
      .query(uid)
      .findOne({

        where:{
          documentId
        },

        populate:{
          department:true
        }

      });



    if(!existing){

      return ctx.notFound(
        "Content not found"
      );

    }





    if(
      existing.department &&
      existing.department.documentId !== departmentId
    ){


      console.log(
        "❌ Department mismatch"
      );


      return ctx.forbidden(
        "Cannot update another department content"
      );


    }



    forceDepartment(
      ctx,
      departmentId,
      "update"
    );



    return next();

  }







  /**
   * READ LIST / SINGLE
   */


  if(action==="read"){


    applyDepartmentFilter(
      ctx,
      departmentId
    );


    return next();

  }



  return next();


};


};