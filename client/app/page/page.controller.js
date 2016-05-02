'use strict';

angular.module('finalProjectApp')
  .controller('PageCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $http.get('/api/pages')
       .success(function(data) {
         $scope.pages = data;
         socket.syncUpdates('page', $scope.pages);
         console.log($scope.pages);
       });

       $scope.$on('$destroy', function() {
         socket.unsyncUpdates('course');
       });

  });
