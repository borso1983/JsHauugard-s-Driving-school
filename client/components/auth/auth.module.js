'use strict';

angular.module('finalProjectApp.auth', [
  'finalProjectApp.constants',
  'finalProjectApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
