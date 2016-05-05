'use strict';

angular.module('finalProjectApp')
  .controller('CourseCtrl', function ($scope, $http, $state, socket) {


    $http.get('/api/courses')
       .success(function(data) {
         $scope.courses = data;
         socket.syncUpdates('course', $scope.courses);
         console.log($scope.courses);
       });

       $scope.goToSignUp= function(course) {
       $state.go('signup', {
       id: course._id
      });
   };

      //  $scope.addNewCourse = function(){
      //   $http.post('/api/courses', $scope.newCourse)
      //   .success(function(){
      //     $scope.newCourse = {};
      //   });
      //  //socket.syncUpdates('course', $scope.courses);
      // };
      //
      // $scope.editCourse = function(course) {
      //   $state.go('editCourse', {
      //     id: course._id
      //   });
      // };
      //
      // $scope.deleteCourse = function(course){
      //    $http.delete('/api/courses/' + course._id)
      //    .success(function(){
      //      //$scope.courses.splice(index, 1);
      //    });
      //  //  socket.syncUpdates('course', $scope.courses);
      //  };

       $scope.$on('$destroy', function() {
         socket.unsyncUpdates('course');
       });

});
