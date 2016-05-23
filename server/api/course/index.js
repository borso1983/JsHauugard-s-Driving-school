'use strict';

var express = require('express');
var controller = require('./course.controller');
var auth  = require ('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.hasRole('admin'), controller.create); 
router.put('/:id',auth.hasRole('admin'), controller.update);
router.patch('/:id',auth.hasRole('admin'), controller.update);
router.delete('/:id',auth.hasRole('admin'), controller.destroy);
router.put('/assign/:courseId/:userId', controller.addStudentToList);
router.put('/assign/:courseId', controller.addEventToList);
router.put('/delete/:courseId/:eventId', controller.removeEventFromList);

module.exports = router;
