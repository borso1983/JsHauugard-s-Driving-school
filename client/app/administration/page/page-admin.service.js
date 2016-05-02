'use strict';

angular.module('finalProjectApp')
  .factory('PageAdminService', function($resource) {
    return $resource('/api/pages/:id',{
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
