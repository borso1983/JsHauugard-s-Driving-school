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
      ref: 'User'
  }],
  page:{
    type: mongoose.Schema.ObjectId,
    ref: 'Page'
  },
  events : [{ 
    title: String, // The title of the event
    type: String, // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
    startsAt: Date, // A javascript date object for when the event starts
    endsAt: Date, // Optional - a javascript date object for when the event ends
    editable: Boolean, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
    deletable: Boolean, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
    draggable: Boolean, //Allow an event to be dragged and dropped
    resizable: Boolean, //Allow an event to be resizable
    incrementsBadgeTotal: Boolean, //If set to false then will not count towards the badge total amount on the month and year view
    recursOn: String, // If set the event will recur on the given period. Valid values are year or month
    cssClass: String, //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
    allDay: Boolean // set to true to display the event as an all day event on the day view
  }]
});

export default mongoose.model('Course', CourseSchema);
