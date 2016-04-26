'use strict';

angular.module('finalProjectApp')
  .controller('StudentCtrl', function ($scope, $http, StudentService, User, Auth, socket) {

<<<<<<< HEAD
    $http.get('/api/students')
       .success(function(data) {
         $scope.students = data;
         socket.syncUpdates('student', $scope.students);
         console.log($scope.students);
       });
=======
   StudentService.query(function(students){
     $scope.students = students;
     socket.syncUpdates('student', $scope.students);
   });

   /*$scope.getStudent = function(student){
         $state.go('getStudent', {
             id: student._id

         });
       };*/


>>>>>>> 0692de99c3fd89ac08720c5c35c89afd72abbd09

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



   $scope.deleteStudent = function(student){
     StudentService.delete({id: student._id}, function(student){
       console.log("Student deleted");

     });

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
   $scope.goToStudent= function(student){

     $state.go('getStudent',{
       id:student._id
     });
   }


   $scope.$on('$destroy', function(){
    socket.unsyncUpdates('student');

  });
  });
