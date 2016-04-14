'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')), Schema = mongoose.Schema;


var StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  telNum : String,

  address: {
    city: String,
    zipCode : Number,
    street : String,
    streetNumber : Number
  },
  owner :{
    type: mongoose.Schema.ObjectId,
    ref : 'User'
  },
  course :{
    type: mongoose.Schema.ObjectId,
    ref : 'Course'
  },
  calendar: [{
    eventDate: Date,
    description: String,
  }]
});

export default mongoose.model('Student', StudentSchema);
