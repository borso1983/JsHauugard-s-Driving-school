'use strict';

angular.module('finalProjectApp')
 .controller('EditController', function($scope, $stateParams ,socket, $state,  UserService, Auth){

    $scope.message = 'Hello';

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.currentUser = Auth.getCurrentUser();

    $scope.updateUser = function(currentUser){
      $scope.submitted = true;
      if ($scope.form.$valid) {
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
       }
     };

    $scope.undoUserEdit = function(){
      $state.go('user',{

      });
    };
});
