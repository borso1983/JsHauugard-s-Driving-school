'use strict';

angular.module('finalProjectApp')
 .controller('EditStudentCtrl', function($scope, $stateParams ,socket, $state, StudentService){

    $scope.message = 'Hello';
    StudentService.get({id:$stateParams.id}, function(student){
      $scope.student= student;

    });
    $scope.editStudent = function(student){
        StudentService.edit({
        firstName : student.firstName,
        lastName : student.lastName,
        telNum : student.telNum,
        city : student.address.city,
        zipcode: student.address.zipCode,
        street : student.address.street,
        streetNumber : student.address.streetNumber

      });
      $state.go('student', {

      });
    };

    $scope.undoUpdateStudent = function(){
      $scope.editStudent = undefined;
    };
});
