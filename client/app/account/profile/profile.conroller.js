'use strict';

angular.module('finalProjectApp')
 .controller('ProfileController', function($scope, $stateParams, $mdToast, socket, $state, UserService, Auth, ImageService){

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

     $scope.image = {
       originalImage: '',
       croppedImage: ''
     };
     $scope.loading = false;

     $scope.readFileImg = function(files) {
       $scope.currentUser.photo = undefined;
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
           function(currentUser) {
             if(currentUser){
               $scope.currentUser = currentUser;
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

    $scope.undoUserEdit = function(){
      $state.go('user',{

      });
    };
});
