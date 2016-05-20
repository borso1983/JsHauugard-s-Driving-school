'use strict';

angular.module('finalProjectApp')
  .factory('CourseAdminService', function($resource) {
    return $resource('/api/courses/:id',{
        id: '@id'
      },{
        update: {
          method:'PUT'
        },
        paged: {
          method:'GET'
        },
        post : {
          method:'POST'
        }
      });
});
