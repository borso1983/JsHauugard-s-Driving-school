'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editStudent', {
        url: '/student/edit/:id',
        templateUrl: 'app/student/editStudent.html',
        controller: 'EditStudentCtrl'
      });
  });
