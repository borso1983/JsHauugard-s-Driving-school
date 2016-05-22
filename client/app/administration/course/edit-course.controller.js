'use strict';

angular.module('finalProjectApp')
  .controller('EditCourseCtrl', function ($scope, $state, $http, socket, $stateParams, CourseAdminService, $mdToast, moment, Auth) {

    if(!Auth.isAdmin()) {
      $state.go('main');
      $scope.isAdmin =false;
    }
    else{
      $scope.isAdmin = true;
    }


    CourseAdminService.get({id:$stateParams.id}, function(course) {
      $scope.course = course;
      $scope.events = $scope.events;
      $scope.dtStart = new Date($scope.course.date.end);
      $scope.dtEnd = new Date($scope.course.date.start);
      // $scope.events.startsAt = moment($scope.events.startsAt).toDate();
      // $scope.events.endsAt = moment($scope.events.endsAt).toDate();

    });

    $scope.calendarView = 'month';
    $scope.calendarDate = Date.now();
    $scope.viewDate = new Date();
    $scope.tabSettings = {
      locked : true,
      selectedIndex : 0,
      label: '',
      type: 'Important'
    };

    $scope.evtypes = ['Important', 'Warning', 'Info', 'Inverse', 'Success', 'Special'];

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
        // $scope.tabSettings.selectedIndex = 3 ;
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

     $scope.updateEvents = function(course) {
           CourseAdminService.update({
             id: course.events._id,
             title: course.events.title,
             startsAt: course.events.startsAt,
             endsAt: course.events.endsAt,
             type: course.events.type
           });

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
      });
      $scope.showAdd = false;

    };


    //  $scope.addNewEvent = function(course){
    //    CourseAdminService.post({
    //      id: course.events._id,
    //      events: {
    //               title: course.events.title,
    //               startsAt: course.events.startsAt,
    //               endsAt: course.events.endsAt,
    //               type: course.events.type
    //             }
    //    });
    // };

  //   $scope.addNewEvent = function(course){
  //    $http.post('/api/courses', $scope.newEvent)
  //    .success(function(){
  //      $scope.newEvent = {
  //        events: {
  //          title: course.events.title,
  //          startsAt: course.events.startsAt,
  //          endsAt: course.events.endsAt,
  //          type: course.events.type
  //        }
  //      };
  //       $scope.tabSettings.selectedIndex = 3 ;
  //    });
   //
  //  };

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
              // result.date.end = moment(result.date.end).toDate();
              // result.date.start = moment(result.date.start).toDate();

              $scope.course = result;
            });
     };


     $scope.undoCourseEdit = function() {
       $state.go('administration.course', {

       });
     };


});
