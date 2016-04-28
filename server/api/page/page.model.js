'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PageSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Page', PageSchema);
