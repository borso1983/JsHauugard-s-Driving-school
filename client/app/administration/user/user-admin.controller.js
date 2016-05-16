'use strict';

angular.module('finalProjectApp')
  .controller('UserAdminCtrl', function ($scope, $http, UserAdminService, User,  $state, Auth, socket) {
      $scope.isAuthenticated = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.users = User.query();
      $http.get('/api/users')
          .success(function(data) {
            $scope.users = data;
            socket.syncUpdates('user', $scope.users);
            console.log($scope.users);
          });

        
});
