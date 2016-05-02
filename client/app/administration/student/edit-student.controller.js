'use strict';

angular.module('finalProjectApp')
 .controller('EditStudentCtrl', function($scope, $stateParams ,socket, $state, StudentService){

    $scope.message = 'Hello';
    StudentService.get({id:$stateParams.id}, function(student){
      $scope.student= student;

    });

    $scope.updateStudent = function(student){
        StudentService.update({
        id:student._id,
        firstName : student.firstName,
        lastName : student.lastName,
        telNum : student.telNum,
        city : student.address.city,
        zipcode: student.address.zipCode,
        street : student.address.street,
        streetNumber : student.address.streetNumber

      });
      $state.go('administration.student', {

      });
    };

    $scope.undoStudentEdit = function(){
      $state.go('administration.student',{

      });
    };
});
