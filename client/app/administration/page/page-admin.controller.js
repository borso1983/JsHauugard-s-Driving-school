'use strict';

angular.module('finalProjectApp')
  .controller('PageAdminCtrl', function ($scope, $http, socket, $state, Auth) {

    // If user is not admin go back to main page
        if(!Auth.isAdmin()) {
          $state.go('main');
          $scope.isAdmin =false;
        }
        else{
          $scope.isAdmin = true;
        }

    $scope.message = 'Hello';

    $http.get('/api/pages')
       .success(function(data) {
         console.log(data);
         $scope.pages = data;
         socket.syncUpdates('page', $scope.pages);
         console.log($scope.pages);
       });

       $scope.addNewPage = function(){
        $http.post('/api/pages', $scope.newPage)
        .success(function(){
          $scope.newPage = {};
            socket.syncUpdates('page', $scope.pages);
        });
        // $scope.showAdd = false;

      };

      $scope.editPage = function(page) {
        $state.go('administration.page-edit', {
          id: page._id
        });
      };

      $scope.deletePage = function(page){
         $http.delete('/api/pages/' + page._id)
         .success(function(){
            socket.syncUpdates('page', $scope.pages);
         });

       };

       $scope.$on('$destroy', function() {
         socket.unsyncUpdates('page');
       });

  });
