'use strict';

angular.module('finalProjectApp')
  .controller('StudentCtrl', function ($scope, $http, StudentService, User, Auth) {

    $scope.createStudent = function(){
        if ($scope.form.$valid) {
          Auth.createUser({
            name: $scope.vm.user.name,
            email: $scope.vm.user.email,
            password: $scope.vm.user.password
          })
          .then((user) => {
              // Account created, redirect to home
              // this.$state.go('main');
              console.log(user);

              $scope.getUserIdByEmail($scope.vm.user.email, function(id) {

                  console.log(id);
                  $scope.newStudent.owner = id;
                  StudentService.save($scope.newStudent, function(student){
                    console.log(student);
                  });
              });


          })
          .catch(err => {
              console.log(err.errors);
          });
        }

    };

    $scope.getUserIdByEmail = function(email, callback) {
      $http.get('/api/users/getId/' + email).then(response => {
        callback(response.data);
      });
    };
    /*
    $scope.createStudent = function(){
     StudentService.save($scope.newStudent, function(student){

       console.log(student);
     });

   };

   */
  });
