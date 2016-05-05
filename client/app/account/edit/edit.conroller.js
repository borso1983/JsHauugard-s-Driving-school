'use strict';

angular.module('finalProjectApp')
 .controller('EditController', function($scope, $stateParams ,socket, $state, UserService, AuthService){

    $scope.message = 'Hello';

      $scope.$watch( AuthService.isLoggedIn, function ( isLoggedIn ) {
        $scope.isLoggedIn = isLoggedIn;
        $scope.currentUser = AuthService.currentUser();
      });

      
    $scope.updateUser = function(currentUser){
        UserService.update({
             name : currentUser.name,
             id: currentUser._id,
             email:currentUser.email,
             firstName : currentUser.firstName,
             lastName: currentUser.lastName,
             telNum: currentUser.telNum,
             city: currentUser.address.city,
             zipCode : currentUser.address.zipCode,
             street : currentUser.address.street,
             streetNumber : currentUser.address.streetNumber

      });
      $state.go('main', {

      });
    };

    $scope.undoStudentEdit = function(){
      $state.go('user',{

      });
    };
});
