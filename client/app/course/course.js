'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('course', {
        url: '/course',
        templateUrl: 'app/course/course.html',
        controller: 'CourseCtrl'
      })

      .state('editCourse', {
        url: '/course/:id',
        templateUrl: 'app/course/editCourse.html',
        controller: 'EditCourseCtrl'
      });
  });
