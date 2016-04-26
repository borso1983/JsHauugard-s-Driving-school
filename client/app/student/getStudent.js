'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('getStudent', {
        url: '/student/:id',
        templateUrl: 'app/student/getStudent.html',
        controller: 'getStudentCtrl'
      });
  });
