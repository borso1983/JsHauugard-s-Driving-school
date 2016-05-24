'use strict';

(function() {

function UserResource($resource) {
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller: 'password'
      }
    },
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    },
    updateProfilePhoto: {
      method: 'PUT',
      params: {
        controller: 'profilePhoto'
      }
    }
  });
}

angular.module('finalProjectApp.auth')
  .factory('User', UserResource);

})();
