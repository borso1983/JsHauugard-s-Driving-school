'use strict';

angular.module('finalProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('feedback', {
        url: '/feedback',
        templateUrl: 'app/feedback/feedback.html',
        controller: 'FeedbackCtrl'
      });
  });
