'use strict';

angular.module('finalProjectApp')
   .factory('StudentService', function($resource){
     return $resource('/api/students/:id',{
       id: '@id'
     },{
       update: {
         method:'PUT'
       }
     });

   });
