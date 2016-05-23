'use strict';

angular.module('finalProjectApp')
  .controller('UserAdminCtrl', function ($scope, $http, UserAdminService, User,  $state, Auth, socket) {
      $scope.isAuthenticated = Auth.isLoggedIn;

      $scope.isAdmin = Auth.isAdmin;
     //If not admin go back to main
      if(!Auth.isAdmin()) {
        $state.go('main');
        $scope.isAdmin =false;
      }
      else{
        $scope.isAdmin = true;
      }

      $scope.users = User.query();
      $http.get('/api/users');

        this.users = User.query();
            $http.get('/api/users')

          .success(function(data) {
            $scope.users = data;
            socket.syncUpdates('user', $scope.users);
            console.log($scope.users);
          });

          $scope.userEdit = function(user) {
            $state.go('administration.user-edit', {
              id: user._id
            });
          };

          $scope.createNewUser= function(){
            $state.go('administration.user-create', {
            });
          };


    });
