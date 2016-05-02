'use strict';

angular.module('finalProjectApp')
  .controller('StudentDetailsCtrl', function ($scope, $stateParams, $http, socket, $state, StudentService) {
    $scope.message = 'Hello';

    StudentService.get({id:$stateParams.id}, function(student) {
      $scope.student= student;
    });


 });
