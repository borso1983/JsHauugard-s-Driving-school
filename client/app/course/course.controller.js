'use strict';

angular.module('finalProjectApp')
  .controller('CourseCtrl', function ($scope, $http) {
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
         console.log($scope.courses);
       })
       .error(function(err) {
         alert('Error! Something went wrong');
       });

    $scope.addNewCourse = function(){
     $http.post('/api/courses', $scope.newCourse)
     .success(function(){
       $scope.courses.push($scope.newCourse);
       $scope.newCourse = {};
     })
     .error(function(err){
       alert('Error! Something went wrong');
     });
   };

   $scope.deleteGame = function(index){
      $http.delete('/api/courses/' + $scope.courses[index]._id)
      .success(function(){
        $scope.courses.splice(index, 1);
      })
      .error(function(err){
        alert('Error! Something went wrong');
      });
    };

  });
