'use strict';

angular.module('finalProjectApp')
  .controller('EditCourseCtrl', function ($scope, $state, $http, socket, $stateParams, CourseAdminService) {
    CourseAdminService.get({id:$stateParams.id}, function(course) {
      $scope.course = course;
    });



     $scope.updateCourse = function(course) {
           CourseAdminService.update({
             id: course._id,
             description: course.description,
             week: course.week,
             capacity: course.capacity
           });
           $state.go('administration.course', {

           });
     };

     $scope.undoCourseEdit = function() {
       $state.go('administration.course', {

       });
     };


});
