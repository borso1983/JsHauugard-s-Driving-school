'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/administration/user',
        templateUrl: 'app/administration/user/user-admin.html',
        controller: 'UserAdminCtrl'
      })
    //  .state('editUser', {
  //      url: '/administration/user/:id',
  //      templateUrl: 'app/administration/edit-user-admin.html',
  //      controller: 'EditUserAdminCtrl'
    //  })
      ;
  });
