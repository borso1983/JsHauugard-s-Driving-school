'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('studentDetails', {
        url: '/student/details/:id',
        templateUrl: 'app/student/studentDetails.html',
        controller: 'StudentDetailsCtrl'
      });
  });
