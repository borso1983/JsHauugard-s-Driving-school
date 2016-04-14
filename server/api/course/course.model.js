'use sweetrict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')), Schema = mongoose.Schema;

var CourseSchema = new mongoose.Schema({
  week : Number,
  date: {
      start: Date,
      end: Date
  },

  capacity : Number,
    availablePlace: {
    type :Number,
    default: 0
  },

  description : String,
  students: [{
     type: mongoose.Schema.ObjectId,
      ref: 'Student'
  }]
});

export default mongoose.model('Course', CourseSchema);
