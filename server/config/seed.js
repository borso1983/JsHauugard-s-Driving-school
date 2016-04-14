/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Course from '../api/course/course.model';
import Student from '../api/student/student.model';



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
   Student.find({}).removeAsync()
     .then(() => {
       Student.createAsync(
         {
          _id: '569e69cc1ab998358d376677',
         firstName: 'First',
         lastName: 'User',
         telNum : '28 911 848',

         address: {
           city: 'Esbjerg',
           zipCode : 6700,
           street : 'Spangsbjerg Kirkevej',
           streetNumber : 20
         },
         owner: '569e69cc1ab998358d376678',
         course :'119e69cc1ab998358d376677',
         calendar: [{
           eventDate: '12/10/2015',
           description: '10.00 introduction'},
           {
           eventDate: '08/10/2015',
           description: '16.00 theori'},
           {
          eventDate: '10/10/2015',
           description: '16.00 theori'
         }],
       },
         {
           _id: '569e69cc1ab998358d37667a',
         firstName: 'Second',
         lastName: 'Student',
         telNum : '48 911 848',

         address: {
           city: 'Esbjerg',
           zipCode : 6700,
           street : 'Spangsbjerg Kirkevej',
           streetNumber : 25
         },
         owner: '569e69cc1ab998358d37667a',
         course :'119e69cc1ab998358d376677',
         calendar: [{
           eventDate: '12/10/2015',
           description: '10.00 introduction'},
           {
           eventDate: '08/10/2015',
           description: '16.00 theori'},
           {
          eventDate: '10/10/2015',
           description: '16.00 theori'
         }],
       })
     .then(() => {
       console.log('finished populating students');
     });
 });

Course.find({}).removeAsync()
  .then(() => {
    Course.createAsync({
      _id: '119e69cc1ab998358d376677',
      startDate: '12/10/2015' ,
        endDate: '12/01/2016' ,
        availablePlace: 16,
        description : 'Driving Lessons',
        students: ['569e69cc1ab998358d376677', '569e69cc1ab998358d37667a'
      ]
    })
    .then(() => {
        console.log('finished populating courses');
      });
  });
