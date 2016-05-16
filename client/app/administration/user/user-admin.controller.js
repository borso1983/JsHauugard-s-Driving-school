'use strict';

angular.module('finalProjectApp')
  .controller('UserAdminCtrl', function ($scope, $http, UserAdminService, User,  $state, Auth, socket) {
      $scope.isAuthenticated = Auth.isLoggedIn;
<<<<<<< HEAD
      $scope.isAdmin = Auth.isAdmin;
      $scope.users = User.query();
      $http.get('/api/users')
=======
        this.users = User.query();
            $http.get('/api/users')
>>>>>>> 2f968eaf774747c6fc0f6b72826223f6f056ddca
          .success(function(data) {
            $scope.users = data;
            socket.syncUpdates('user', $scope.users);
            console.log($scope.users);
          });

        
});
