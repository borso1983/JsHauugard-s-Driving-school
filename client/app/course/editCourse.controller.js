'use strict';

angular.module('finalProjectApp')
  .controller('EditCourseCtrl', function ($scope, $stateParams, CourseService) {
    $scope.message = 'Hello';

    CourseService.get({id:$stateParams.id}, function(course) {
      $scope.course = course;
    });
  });
