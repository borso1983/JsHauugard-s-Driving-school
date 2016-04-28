'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pageCtrlStub = {
  index: 'pageCtrl.index',
  show: 'pageCtrl.show',
  create: 'pageCtrl.create',
  update: 'pageCtrl.update',
  destroy: 'pageCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pageIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './page.controller': pageCtrlStub
});

describe('Page API Router:', function() {

  it('should return an express router instance', function() {
    pageIndex.should.equal(routerStub);
  });

  describe('GET /api/pages', function() {

    it('should route to page.controller.index', function() {
      routerStub.get
        .withArgs('/', 'pageCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/pages/:id', function() {

    it('should route to page.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'pageCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/pages', function() {

    it('should route to page.controller.create', function() {
      routerStub.post
        .withArgs('/', 'pageCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/pages/:id', function() {

    it('should route to page.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'pageCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/pages/:id', function() {

    it('should route to page.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'pageCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/pages/:id', function() {

    it('should route to page.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'pageCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
