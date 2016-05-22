'use strict';

angular.module('finalProjectApp')
  .controller('AdministrationCtrl', function ($scope, Auth, $state) {
    // If user is not admin go back to main page
        if(!Auth.isAdmin()) {
          $state.go('main');
          $scope.isAdmin =false;
        }
        else{
          $scope.isAdmin = true;
        }

    $scope.toggle = true;


      angular.element('.sidebar-icon').click(function() {
      if (!$scope.toggle){
        angular.element('.page-container').addClass('sidebar-collapsed').removeClass('sidebar-collapsed-back');
        angular.element('#menu span').css({'position':'absolute'});
      }
      else {
        angular.element('.page-container').removeClass('sidebar-collapsed').addClass('sidebar-collapsed-back');
        setTimeout(function() {
          angular.element('#menu span').css({'position':'relative'});
        }, 400);
      }

    $scope.toggle = !$scope.toggle;

    });




  });
