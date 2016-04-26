'use strict';

angular.module('finalProjectApp')
  .controller('getStudentCtrl', function ($scope, $stateParams, CourseService) {
    $scope.message = 'Hello';

    CourseService.get({id:$stateParams.id}, function(student) {
    $scope.student= student;
  });


 });
