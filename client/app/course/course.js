'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('course', {
        url: '/course',
        templateUrl: 'app/course/course.html',
        controller: 'CourseCtrl'
      });
  });
