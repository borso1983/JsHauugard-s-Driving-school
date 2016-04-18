'use strict';

angular.module('finalProjectApp')
  .factory('CourseService', function($resource) {
    return $resource('/api/courses/:id',{
        id: '@id'
      },{
        update: {
          method:'PUT'
        },
        paged: {
          method:'GET'
        }
      });
});
