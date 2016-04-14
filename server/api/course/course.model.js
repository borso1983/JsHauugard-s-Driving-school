'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CourseSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  availablePlace: Number,
  Description : String,
  students: [{

     type: mongoose.Schema.ObjectId,
      ref: 'Student'

  }]
});

export default mongoose.model('Course', CourseSchema);
