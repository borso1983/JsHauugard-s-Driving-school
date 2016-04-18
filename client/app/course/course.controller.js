'use strict';

angular.module('finalProjectApp')
  .controller('CourseCtrl', function ($scope, $http, socket) {

    $scope.message = [{
      name : 'joska',
      gender : 'jedi'
    },{
      name : 'shannyi',
      gender : 'pultos'
    }];

    $http.get('/api/courses')
       .success(function(data) {
         $scope.courses = data;
         socket.syncUpdates('course', $scope.courses);
         console.log($scope.courses);
       });
        socket.syncUpdates('course', $scope.courses);
       });

    $scope.addNewCourse = function(){
     $http.post('/api/courses', $scope.newCourse)
     .success(function(course){
       $scope.courses.push(course);
       $scope.newCourse = {};
     });
    //socket.syncUpdates('course', $scope.courses);
   };


   $scope.deleteCourse = function(course){
      $http.delete('/api/courses/' + course._id)
      .success(function(){
        //$scope.courses.splice(index, 1);
      });
      socket.syncUpdates('course', $scope.courses);
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('course');
    });
  });
