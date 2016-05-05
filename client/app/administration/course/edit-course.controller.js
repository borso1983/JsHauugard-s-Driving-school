'use strict';

angular.module('finalProjectApp')
  .controller('EditCourseCtrl', function ($scope, $state, $http, socket, $stateParams, CourseAdminService, $mdToast) {
    CourseAdminService.get({id:$stateParams.id}, function(course) {
      $scope.course = course;
    });
    $scope.hideEmail = true;

    $http.get('/api/pages')
       .success(function(data) {
         console.log(data);
         $scope.pages = data;
         socket.syncUpdates('page', $scope.pages);
         console.log($scope.pages);
       });

       $http.get('/api/courses')
          .success(function(data) {
            $scope.courses = data;
            socket.syncUpdates('course', $scope.courses);
            console.log($scope.courses);
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

     $scope.getPage = function(page) {
       console.log(page);
       CourseAdminService.update({
          id:$scope.course._id,
          page: page._id
       });
       $scope.course.page =  $http.get('/api/courses')
        .success(function(data) {
          $scope.courses = data;
          socket.syncUpdates('course', $scope.courses);
          console.log($scope.courses);
        });

        $mdToast.show(
            $mdToast.simple()
            .textContent('Page has changed !!')
            .position('top right')
            .parent('#toastParent')
            .hideDelay(500)

        );
     };


     $scope.undoCourseEdit = function() {
       $state.go('administration.course', {

       });
     };


});
