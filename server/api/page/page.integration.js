'use strict';

var app = require('../..');
import request from 'supertest';

var newPage;

describe('Page API:', function() {

  describe('GET /api/pages', function() {
    var pages;

    beforeEach(function(done) {
      request(app)
        .get('/api/pages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      pages.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/pages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/pages')
        .send({
          name: 'New Page',
          info: 'This is the brand new page!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPage = res.body;
          done();
        });
    });

    it('should respond with the newly created page', function() {
      newPage.name.should.equal('New Page');
      newPage.info.should.equal('This is the brand new page!!!');
    });

  });

  describe('GET /api/pages/:id', function() {
    var page;

    beforeEach(function(done) {
      request(app)
        .get('/api/pages/' + newPage._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          page = res.body;
          done();
        });
    });

    afterEach(function() {
      page = {};
    });

    it('should respond with the requested page', function() {
      page.name.should.equal('New Page');
      page.info.should.equal('This is the brand new page!!!');
    });

  });

  describe('PUT /api/pages/:id', function() {
    var updatedPage;

    beforeEach(function(done) {
      request(app)
        .put('/api/pages/' + newPage._id)
        .send({
          name: 'Updated Page',
          info: 'This is the updated page!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPage = {};
    });

    it('should respond with the updated page', function() {
      updatedPage.name.should.equal('Updated Page');
      updatedPage.info.should.equal('This is the updated page!!!');
    });

  });

  describe('DELETE /api/pages/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/pages/' + newPage._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when page does not exist', function(done) {
      request(app)
        .delete('/api/pages/' + newPage._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
