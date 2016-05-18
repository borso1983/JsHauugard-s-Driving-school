'use strict';

angular.module('finalProjectApp')
  .controller('FeedbackCtrl', function ($scope, moment, $http, socket) {
    $scope.message = 'Hello';
    $scope.calendarView = 'month';
    $scope.calendarDate = Date.now();

    $http.get('/api/courses')
       .success(function(data) {
         $scope.courses = data;
         socket.syncUpdates('course', $scope.courses);
         console.log($scope.courses);
       });


  });
