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
  });
