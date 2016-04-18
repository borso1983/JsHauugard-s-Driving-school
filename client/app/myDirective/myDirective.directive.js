'use strict';

angular.module('finalProjectApp')
  .directive('myDirective', function () {
    return {
      templateUrl: 'app/myDirective/myDirective.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
