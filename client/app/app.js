'use strict';

 angular.module('finalProjectApp', [
    'finalProjectApp.auth',
    'finalProjectApp.admin',
    'finalProjectApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match',
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'summernote',
    'mwl.calendar',
    'ui-listView',
    'slick',
    'ngFileUpload',
    'ngImgCrop',
    'vAccordion'
  ])


  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
