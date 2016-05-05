'use strict';

angular.module('finalProjectApp')
   .factory('UserService', function($resource){
     return $resource('/api/user/:id',{
       id: '@id'
     },{
       update: {
         method:'PUT'
       }
     });

   });
