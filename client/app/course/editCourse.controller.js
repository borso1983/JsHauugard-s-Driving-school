'use strict';

angular.module('finalProjectApp')
  .controller('EditCourseCtrl', function ($scope, $http, socket, $stateParams, CourseService) {
    $scope.message = 'Hello';

    CourseService.get({id:$stateParams.id}, function(course) {
      $scope.course = course;
    });
/*
    $scope.updateCourse = function(form){
       $http.put('/api/courses/' + form.course._id)
       .success(function(){

       });
       socket.syncUpdates('course', $scope.courses);
     };
*/


     $scope.updateCourse = function(course) {
           CourseService.update({
             id: course._id
           });
     };


});
