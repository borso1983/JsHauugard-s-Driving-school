'use strict';

angular.module('finalProjectApp')
  .controller('EditUserCtrl', function (Auth,$scope, $state, $http, socket, $stateParams, UserAdminService) {

    UserAdminService.get({id:$stateParams.id}, function(user) {
      $scope.user =  user;
      console.log(user);
    });
    $scope.isLoggedIn = Auth.isLoggedIn;
  
    $scope.updateUser = function(user){
      $scope.submitted = true;
      if ($scope.form.$valid) {
        UserAdminService.update({
           name : user.name,
           id: user._id,
           email:user.email,
           firstName : user.firstName,
           lastName: user.lastName,
           telNum: user.telNum,
           city: user.address.city,
           zipCode : user.address.zipCode,
           street : user.address.street,
           streetNumber : user.address.streetNumber

         });
         $state.go('administration.user', {

         });
       }
     };

     $scope.undoPageEdit = function() {
       $state.go('administration.page', {

       });
     };



});
