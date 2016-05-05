'use strict';

angular.module('finalProjectApp')
  .controller('EditPageCtrl', function ($scope, $state, $http, socket, $stateParams, PageAdminService) {

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
