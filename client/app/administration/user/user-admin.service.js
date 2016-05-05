'use strict';

angular.module('finalProjectApp')
   .factory('UserAdminService', function($resource){
     return $resource('/api/users/:id',{
       id: '@id'
     },{
       update: {
         method:'PUT'
       }
     });

   });
