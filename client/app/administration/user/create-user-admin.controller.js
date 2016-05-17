'use strict';

class CreateUserAdminController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  course = null;
  //end-non-standard
  constructor(Auth, $state, $stateParams, CourseService,  $http, $scope) {
    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;
    this.$scope = $scope;
  }
/*
  getUserIdByEmail(email, callback) {
    this.$http.get('/api/users/getId/' + email).then(response => {
      callback(response.data);//response data only contains the user._id
    });
  }

  assignStudentToCourse(courseId, userId, callback){
    this.$http.put('/api/courses/assign/' + courseId + '/' + userId).then(response => {
      callback(response.data);//response data only contains the user._id
    });
  }
*/

  register(form) {
    var that = this;
    this.submitted = true;
    if (form.$valid) {

      this.Auth.createUser({
              name: this.user.name,
              email: this.user.email,
              password: this.user.password,
              firstName: this.user.firstName,
              lastName: this.user.lastName,
              telNum: this.user.telNum,
              course : this.course._id
            //  role: this.user.student
      })
      .then(() => {

        that.getUserIdByEmail(that.user.email, function(id) {
          console.log(id);
          that.assignStudentToCourse(that.course._id, id, function(xxx){
            console.log(xxx);
          });
        });

      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });

    } // if (form.$valid)
  } // register form

}

angular.module('finalProjectApp')
  .controller('CreateUserAdminCtrl', CreateUserAdminController);
