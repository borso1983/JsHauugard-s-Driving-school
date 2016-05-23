'use strict';

angular.module('finalProjectApp')
  .controller('EditCourseCtrl',
  function ($scope, $state, $http, socket, $stateParams, Auth, CourseAdminService, $mdToast, moment, $mdDialog) {
    CourseAdminService.get({id:$stateParams.id}, function(course) {
      $scope.course = course;
      $scope.newEvent = $scope.events;
      $scope.dtStart = moment($scope.course.date.end).toDate();
      $scope.dtEnd = moment($scope.course.date.start).toDate();
      // $scope.events.startsAt = moment($scope.events.startsAt).toDate();
      // $scope.events.endsAt = moment($scope.events.endsAt).toDate();

    });
    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;


    $scope.calendarView = 'month';
    $scope.calendarDate = Date.now();
    $scope.viewDate = new Date();
    $scope.tabSettings = {
      locked : true,
      selectedIndex : 0,
      label: '',
      type: 'Important'
    };

    $scope.evtypes = ['important', 'warning', 'info', 'inverse', 'success', 'special'];

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
             capacity: course.capacity,
             date: {
               start: course.date.start,
               end: course.date.end
             }
           });
           $state.go('administration.course', {

           });
     };

     $scope.addEventClick = function() {
       $scope.tabSettings.locked = false;
        $scope.tabSettings.selectedIndex = 3 ;
          $scope.tabSettings.label = 'New Event';
     };

     $scope.eventClick = function() {
       $scope.tabSettings.locked = true;
          $scope.tabSettings.label = '';
     };



     $scope.cancelEvent = function() {
       $scope.tabSettings.locked = true;
         $scope.tabSettings.selectedIndex = 3 ;
          $scope.tabSettings.label = '';
          $scope.course.events.title = '';
          $scope.type = '';
          $scope.course.events.startsAt = '';
          $scope.course.events.endsAt = '';
     };

     $scope.addNewEvent = function(course){
      $http.put('/api/courses/assign/' + course._id, $scope.newEvent)
      .success(function(){

        $scope.newEvent = {};//reset the form

        $mdToast.show(
            $mdToast.simple()
            .textContent('Page has changed !!')
            .position('top right')
            .parent('#toastParent')
            .hideDelay(500)

        );
        $state.reload();

      });
      $scope.showAdd = false;

    };

    // if($scope.isAdmin){
      $scope.eventDeleted = function(event) {
        // $http.delete('/api/courses/delete/' + $scope.course._id +'/' + event._id)
        // .success(function(){
        //   socket.syncUpdates('course', $scope.course);
        // });
        $http.put('/api/courses/delete/' + $scope.course._id + '/' + event._id)
        .success(function(){

          $scope.newEvent = {};//reset the form

          $mdToast.show(
              $mdToast.simple()
              .textContent('Page has changed !!')
              .position('top right')
              .parent('#toastParent')
              .hideDelay(500)

          );
          $state.reload();

        });
        $scope.showAdd = false;
    };

     $scope.getPage = function(page) {
            console.log(page);
            $scope.course.page = page;
            CourseAdminService.update({
               id:$scope.course._id
            }, $scope.course, function(result){
              $mdToast.show(
                  $mdToast.simple()
                  .textContent('Page has changed !!')
                  .position('top right')
                  .parent('#toastParent')
                  .hideDelay(500)

              );
              $scope.course = result;
            });
     };

         $scope.eventClicked = function(event) {
         // Appending dialog to document.body to cover sidenav in docs app
         // Modal dialogs should fully cover application
         // to prevent interaction outside of dialog
         $mdDialog.show(
           $mdDialog.alert()
             .parent(angular.element(document.querySelector('#popupContainer')))
             .clickOutsideToClose(true)
             .title(event.title)


             .textContent( moment(event.startsAt).format('MMM Do YY') + ' - ' + moment(event.endsAt).format('MMM Do YY') )
             .ariaLabel('Event Popup')
             .ok('Close')
             .targetEvent(event)

         );
       };

     $scope.undoCourseEdit = function() {
       $state.go('administration.course', {

       });
     };


});
