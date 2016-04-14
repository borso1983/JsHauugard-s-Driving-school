'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')), Schema = mongoose.Schema;

var StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  telNum : String,
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  address: {
    city: String,
    zipCode : Number,
    street : String,
    streetNumber : Number
  },
  course :{
    type: Schema.ObjectId,
    ref :'Course'
  },
  calendar: [{
    eventDate: Date,
    description: String,
  }]
});

export default mongoose.model('Student', StudentSchema);
