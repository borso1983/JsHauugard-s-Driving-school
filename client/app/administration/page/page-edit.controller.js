'use strict';

angular.module('finalProjectApp')
  .controller('EditPageCtrl', function ($scope, $state, $http, socket, $stateParams, PageAdminService, Auth) {

    // If user is not admin go back to main page
        if(!Auth.isAdmin()) {
          $state.go('main');
          $scope.isAdmin =false;
        }
        else{
          $scope.isAdmin = true;
        }

      

    PageAdminService.get({id:$stateParams.id}, function(page) {
      $scope.page =  page;
      console.log(page);
    });

     $scope.updatePage = function(page) {
           PageAdminService.update({
             id: page._id,
             text: page.text

           });
           $state.go('administration.page', {

           });
     };

     $scope.undoPageEdit = function() {
       $state.go('administration.page', {

       });
     };



});
