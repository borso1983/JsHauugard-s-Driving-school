'use strict';

angular.module('finalProjectApp')
  .controller('AdministrationOverviewCtrl', function ( $scope, $http, socket, $state, Auth){
    // If user is not admin go back to main page
        if(!Auth.isAdmin()) {
          $state.go('main');
          $scope.isAdmin =false;
        }
        else{
          $scope.isAdmin = true;
        }

    var toggle = true;

      angular.element('.sidebar-icon').click(function() {
      if (!toggle){
        angular.element('.page-container').addClass('sidebar-collapsed').removeClass('sidebar-collapsed-back');
        angular.element('#menu span').css({'position':'absolute'});
      }
      else {
        angular.element('.page-container').removeClass('sidebar-collapsed').addClass('sidebar-collapsed-back');
        setTimeout(function() {
          angular.element('#menu span').css({'position':'relative'});
        }, 400);
      }

    toggle = !toggle;

    });




  });
