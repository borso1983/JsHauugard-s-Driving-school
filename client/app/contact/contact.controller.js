'use strict';

angular.module('finalProjectApp')
  .controller('ContactCtrl', function ($scope, $mdDialog) {
    $scope.message = 'Hello';

    $scope.showAlert = function(ev) {
   // Appending dialog to document.body to cover sidenav in docs app
   // Modal dialogs should fully cover application
   // to prevent interaction outside of dialog
   $mdDialog.show(
     $mdDialog.alert()
       .parent(angular.element(document.querySelector('#popupContainer')))
       .clickOutsideToClose(true)
       .title('We are so sorry !')
       .textContent('This feature is not available yet.')
       .ariaLabel('Alert Dialog Demo')
       .ok('Got it!')
       .targetEvent(ev)
   );
 };
  });
