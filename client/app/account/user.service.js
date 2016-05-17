'use strict';

angular.module('finalProjectApp')
   .factory('UserService', function($resource){
     return $resource('/api/users/:id',{
       id: '@id'
     },{
       update: {
         method:'PUT'
       }
     });

   });
