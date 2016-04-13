'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CourseSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  availablePlace: Number,
  Description : String,
  students: [{
    
  }]
});

export default mongoose.model('Course', CourseSchema);
