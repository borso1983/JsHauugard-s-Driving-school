'use strict';

angular.module('finalProjectApp')
 .controller('ProfileController', function($scope, $stateParams ,socket, $state,  UserService, Auth){

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.currentUser = Auth.getCurrentUser();
    if($scope.currentUser.address === undefined) {
      $scope.currentUser.address = {};
    }


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
           address: {
             city: currentUser.address.city,
             zipCode : currentUser.address.zipCode,
             street : currentUser.address.street,
             streetNumber : currentUser.address.streetNumber
           }

         }).$promise
         .then(() => {
           location.reload();
         });
       }
     };

    $scope.undoUserEdit = function(){
      $state.go('user',{

      });
    };
});
