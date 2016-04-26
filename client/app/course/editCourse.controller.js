'use strict';

angular.module('finalProjectApp')
  .controller('EditCourseCtrl', function ($scope, $state, $http, socket, $stateParams, CourseService) {
    $scope.message = 'Hello';

    CourseService.get({id:$stateParams.id}, function(course) {
      $scope.course = course;
    });



     $scope.updateCourse = function(course) {
           CourseService.update({
             id: course._id,
             description: course.description,
             week: course.week,
             capacity: course.capacity,
             date: {
               start : course.date.start,
               end: course.date.end
             }

           });
           $state.go('course', {

           });
     };

     $scope.undoCourseEdit = function() {
       $state.go('course', {

       });
     };


});
