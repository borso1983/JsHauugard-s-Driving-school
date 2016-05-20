/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Course from '../api/course/course.model';
import Student from '../api/student/student.model';
import Page from '../api/page/page.model';




User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
         _id: '569e69cc1ab998358d37667e',
         provider: 'local',
         name: 'Test User',
         email: 'test@example.com',
          role: ['user'],
         password: 'test'
       },
       {
       _id: '569e69cc1ab998358d376678',
       provider: 'local',
       name: 'Test1 User',
       email: 'user1@example.com',
       role: ['user'],
       password: 'test1'
     },
     {
     _id: '569e69cc1ab998358d37667a',
     provider: 'local',
     name: 'Test2 User',
     email: 'user2@example.com',
     role: ['user'],
     password: 'test2'
   }, {
         _id: '569e69cc1ab998358d37667d',
         provider: 'local',
         role: ['admin', 'user', 'superAdmin'],
         name: 'Admin',
         email: 'admin@example.com',
         password: 'admin'
       })
       .then(() => {
         console.log('finished populating users');
       });
   });


Course.find({}).removeAsync()
  .then(() => {
    Course.createAsync({
      _id: '119e69cc1ab998358d376677',
      date : {
        start:'12/10/2015' ,
        end: '12/01/2016'
      },
        week: 25,
        capacity: 20,
        occupied: 16,
        page: '119e69cc1ab998358d376688',
        description : 'Driving Lessons',
        user: ['569e69cc1ab998358d37667e', '569e69cc1ab998358d376678'
      ],
      events : [{
        _id: '119e69cc1ab998358d37668f',
        title:'New Event', // The title of the event
        type: 'Info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        startsAt: '12/10/1990', // A javascript date object for when the event starts
        endsAt: '12/10/1990', // Optional - a javascript date object for when the event ends
        editable:   false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
        deletable:  false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
        draggable:  false, //Allow an event to be dragged and dropped
        resizable:  false, //Allow an event to be resizable
        incrementsBadgeTotal:  true, //If set to false then will not count towards the badge total amount on the month and year view
        recursOn:  'month', // If set the event will recur on the given period. Valid values are year or month
        cssClass:'none', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc

      }, {
        _id: '119e69cc1ab998358d37668c',
        title:'Second Event', // The title of the event
        type: 'Success', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        startsAt: '10/10/1990', // A javascript date object for when the event starts
        endsAt: '12/10/1990', // Optional - a javascript date object for when the event ends
        editable:   false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
        deletable:  false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
        draggable:  false, //Allow an event to be dragged and dropped
        resizable:  false, //Allow an event to be resizable
        incrementsBadgeTotal:  true, //If set to false then will not count towards the badge total amount on the month and year view
        recursOn:  'month', // If set the event will recur on the given period. Valid values are year or month
        cssClass:'none', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc

      }]

    })
    .then(() => {
        console.log('finished populating courses');
      });
  });

  Page.find({}).removeAsync()
    .then(() => {
      Page.createAsync({
        _id: '119e69cc1ab998358d376688',
        name: 'coursePage',
        title: 'Here you can find the available courses',
        text: "<h1>This is a test text just to set up something</h1>",
        active: true
      },{
        _id: '119e69cc1ab998358d37667g',
        name: 'anotherText',
        title: 'Here you can find the available courses',
        text: "<h1>blablbalbla</h1>",
        active: true
      })
      .then(() => {
          console.log('finished populating page');
        });
    });
