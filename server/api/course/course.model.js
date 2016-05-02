'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')), Schema = mongoose.Schema;

var CourseSchema = new mongoose.Schema({
  week : Number,
  date: {
      start: Date,
      end: Date
  },
    capacity : Number,
    occupied :{
    type : Number,
    default: 0
  },
  description : String,
  students: [{
     type: mongoose.Schema.ObjectId,
      ref: 'Student'
  }],
  page:{
    type: mongoose.Schema.ObjectId,
    ref: 'Page'
  }
});

export default mongoose.model('Course', CourseSchema);
