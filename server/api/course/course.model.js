'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CourseSchema = new mongoose.Schema({
  week : Number,
  date: {
      start: Date,
      end: Date
  },
  availablePlace: Number,
  Description : String,
  students: [{
    type: Schema.ObjectId,
    ref: 'student'
  }]
});

export default mongoose.model('Course', CourseSchema);
