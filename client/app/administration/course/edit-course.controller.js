'use strict';

angular.module('finalProjectApp')
  .controller('EditCourseCtrl', function ($scope, $state, $http, socket, $stateParams, CourseAdminService, $mdToast) {
    CourseAdminService.get({id:$stateParams.id}, function(course) {
      $scope.course = course;

    });
    $scope.calendarView = 'month';
    $scope.calendarDate = Date.now();
    $scope.hideEmail = true;
    $scope.events = [{
        title: 'My event title', // The title of the event
        type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        startsAt: new Date(2016,4,16,1), // A javascript date object for when the event starts
        endsAt: new Date(2016,8,26,15), // Optional - a javascript date object for when the event ends
        editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
        deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
        draggable: true, //Allow an event to be dragged and dropped
        resizable: true, //Allow an event to be resizable
        incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
        recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
        cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
        allDay: false // set to true to display the event as an all day event on the day view

    }];

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
