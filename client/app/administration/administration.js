'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/administration', '/administration/overview');
    $stateProvider
      .state('administration', {
        abstract:true,
        url: '/administration',
        templateUrl: 'app/administration/administration.html',
        controller: 'AdministrationCtrl'
      })
      // admin main view
      .state('administration.overview', {
        url: '/overview',
        templateUrl: 'app/administration/administration-overview.html',
        controller: 'AdministrationOverviewCtrl'
      })
      .state('administration.page', {
             url: '/page',
              templateUrl: 'app/administration/page/page-admin.html',
              controller: 'PageAdminCtrl'
      })
      .state('administration.page-edit', {
             url: '/page/:id',
              templateUrl: 'app/administration/page/page-edit.html',
              controller: 'EditPageCtrl'

      })
     //Course list view
      .state('administration.course', {
             url: '/course',
              templateUrl: 'app/administration/course/course-admin.html',
              controller: 'CourseAdminCtrl'
      })
      //course edit view
      .state('administration.course-edit', {
             url: '/course/:id',
              templateUrl: 'app/administration/course/edit-course.html',
              controller: 'EditCourseCtrl'
      })

     /*  .state('administration.student', {
             url: '/student',
              templateUrl: 'app/administration/student/student-admin.html',
              controller: 'StudentAdminCtrl'
      })

      .state('administration.student-edit', {
             url: '/student/:id',
              templateUrl: 'app/administration/student/edit-student.html',
              controller: 'EditStudentCtrl'
      })*/

      .state('administration.user', {
             url: '/administration/user',
              templateUrl: 'app/administration/user-admin.html',
              controller: 'UserAdminCtrl'
      })
      .state('user', {
        url: '/administration/user',
        templateUrl: 'app/administration/user/user-admin.html',
        controller: 'UserAdminCtrl'
      })

      .state('administration.user-edit', {
             url: '/administration/user/:id',
              templateUrl: 'app/administration/edit-user-admin.html',
              controller: 'EditUserAdminCtrl'
      })

      .state('administration.user-create', {
             url: '/administration/user/create',
              templateUrl: 'app/administration/user/create-user-admin.html',
              controller: 'CreateUserAdminCtrl'
      });

  });
