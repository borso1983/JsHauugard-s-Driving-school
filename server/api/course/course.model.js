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
  user: [{
     type: mongoose.Schema.ObjectId,
      ref: 'User'
  }],
  page:{
    type: mongoose.Schema.ObjectId,
    ref: 'Page'
  },
  events : [{ 
    title:{ type: String, default : 'New Event'}, // The title of the event
    type: { type: String, default : 'Important'}, // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
    startsAt: { type: Date, default : '12/10/1990'}, // A javascript date object for when the event starts
    endsAt:  { type: Date, default : '12/10/1990'}, // Optional - a javascript date object for when the event ends
    editable:  { type: Boolean, default : false}, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
    deletable: { type: Boolean, default : false}, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
    draggable: { type: Boolean, default : false}, //Allow an event to be dragged and dropped
    resizable: { type: Boolean, default : false}, //Allow an event to be resizable
    incrementsBadgeTotal: { type: Boolean, default : true}, //If set to false then will not count towards the badge total amount on the month and year view
    recursOn: { type: String, default : 'month'}, // If set the event will recur on the given period. Valid values are year or month
    cssClass: { type: String, default : 'none'}, //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
    allDay: { type: Boolean, default : false}, // set to true to display the event as an all day event on the day view

  }]
});

export default mongoose.model('Course', CourseSchema);
