'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('page', {
        url: '/page',
        templateUrl: 'app/page/page.html',
        controller: 'PageCtrl'
      });
  });
