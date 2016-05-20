/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/courses              ->  index
 * POST    /api/courses              ->  create
 * GET     /api/courses/:id          ->  show
 * PUT     /api/courses/:id          ->  update
 * DELETE  /api/courses/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Course from './course.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Courses
export function index(req, res) {
  Course.find().populate('page').execAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Course from the DB
export function show(req, res) {
  Course.findById(req.params.id)
    .populate('page')
    .execAsync()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Course in the DB
export function create(req, res) {
  Course.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Course in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Course.findById(req.params.id)
    .populate('page')
    .execAsync()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
//assign student to the course
export function addStudentToList(req, res, next) {
  if (req.body._id) {
    delete req.body._id;
  }
  //find a course by ID
  Course.findByIdAsync(req.params.courseId)
  .then(course => {
    if (!course) {
      return res.status(401).end();
    }
    //adding a student into the student array
    course.students.push(req.params.userId);
    //decrease course occupied  by one
    course.occupied++;
    //save and return
    course.saveAsync()
      .spread(updated => {
        return res.json(updated);
      });

  })
  .catch(err => next(err));
}

export function addEventToList(req, res, next) {
  if (req.body._id) {
    delete req.body._id;
  }
  //find a course by ID
  Course.findByIdAsync(req.params.courseId)
  .then(course => {
    if (!course) {
      return res.status(401).end();
    }
    //adding an event into the events array
    course.events.push();

    //save and return
    course.saveAsync()
      .spread(updated => {
        return res.json(updated);
      });

  })
  .catch(err => next(err));
}


// Deletes a Course from the DB
export function destroy(req, res) {
  Course.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
