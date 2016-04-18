'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editCourse', {
        url: '/editCourse/:id',
        templateUrl: 'app/editCourse/editCourse.html',
        controller: 'EditCourseCtrl'
      });
  });
