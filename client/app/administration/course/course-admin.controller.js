'use strict';

angular.module('finalProjectApp')
  .controller('CourseAdminCtrl', function ($scope, $http, $state, socket, Auth) {

    // If user is not admin go back to main page
        if(!Auth.isAdmin()) {
          $state.go('main');
          $scope.isAdmin =false;
        }
        else{
          $scope.isAdmin = true;
        }

      $scope.showAdd = false;


    $http.get('/api/courses')
       .success(function(data) {
         $scope.courses = data;
         socket.syncUpdates('course', $scope.courses);
         console.log($scope.courses);
       });

       $scope.addNewCourse = function(){
        $http.post('/api/courses', $scope.newCourse)
        .success(function(){
          $scope.newCourse = {};
            socket.syncUpdates('course', $scope.courses);
        });
        $scope.showAdd = false;

      };

      $scope.editCourse = function(course) {
        $state.go('administration.course-edit', {
          id: course._id
        });
      };

      $scope.deleteCourse = function(course){
         $http.delete('/api/courses/' + course._id)
         .success(function(){
            socket.syncUpdates('course', $scope.courses);
         });

       };

       $scope.$on('$destroy', function() {
              socket.unsyncUpdates('course');
       });

});
