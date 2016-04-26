'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('student-details', {
        url: '/students/student-details/:id',
        templateUrl: 'app/student/student-details.html',
        controller: 'student-detailsCtrl'
      });
  });
