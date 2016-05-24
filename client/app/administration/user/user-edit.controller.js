'use strict';

angular.module('finalProjectApp')
  .controller('EditUserCtrl', function (Auth,$scope, $state, $http, $mdToast, socket, User, $stateParams, UserAdminService, ImageService) {

    console.log($stateParams.id);
    // User.get({id:$stateParams.id}, function(user) {
    //User.get({name:$stateParams.name}, function(user) {

    //If not admin go back to main
     if(!Auth.isAdmin()) {
       $state.go('main');
       $scope.isAdmin =false;
     }
     else{
       $scope.isAdmin = true;
     }

    UserAdminService.get({id:$stateParams.id}, function(user) {
      $scope.user =  user;
      console.log(user);
    });

    $scope.isLoggedIn = Auth.isLoggedIn;

    // if($scope.user.address === undefined) {
    //   $scope.user.address = {};
    // }

    $scope.currentUser = Auth.getCurrentUser();
    if($scope.currentUser.address === undefined) {
      $scope.currentUser.address = {};
    }


    $scope.updateUser = function(user){
      $scope.submitted = true;
      if ($scope.form.$valid) {
        UserAdminService.update({
           id: user._id,
           name : user.name,
           email:user.email,
           firstName : user.firstName,
           lastName: user.lastName,
           telNum: user.telNum,
           address: {
             city: user.address.city,
             zipCode : user.address.zipCode,
             street : user.address.street,
             streetNumber : user.address.streetNumber
           }

         });
         $state.go('administration.user', {

         });
       }
     };


          $scope.readFileImg = function(files) {
            $scope.user.photo = undefined;
            if (files && files.length) {
              ImageService.readImageFile(files[0], function(err, img) {
                if (err) {
                  var toast = $mdToast.simple()
                    .textContent('Image not saved')
                    .action('Error')
                    .highlightAction(false)
                    .position('top')
                    .theme('error-toast');
                  return $mdToast.show(toast);
                }
                $scope.image.originalImage = img;
              });
            }
          };

          $scope.upload = function() {
            if ($scope.image.croppedImage) {
              $scope.loading = true;
              Auth.updateProfilePhoto($scope.image.croppedImage,
                function(user) {
                  if(user){
                    $scope.user = user;
                    var toast = $mdToast.simple()
                      .textContent('Photo saved')
                      .action('OK')
                      .highlightAction(true)
                      .position('left');
                    $mdToast.show(toast);
                  }
                  $scope.loading = false;
                }
              );
            }
          };

     $scope.undoPageEdit = function() {
       $state.go('administration.page', {

       });
     };



});
