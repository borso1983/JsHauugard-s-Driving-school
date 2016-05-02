'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('student', {
        url: '/student',
        templateUrl: 'app/student/student.html',
        controller: 'StudentCtrl'
      })
      .state('editStudent', {
        url: '/student/:id',
        templateUrl: 'app/student/editStudent.html',
        controller: 'EditStudentCtrl'
      });
  });
