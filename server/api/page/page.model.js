'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PageSchema = new mongoose.Schema({
  name: String,
  title: String,
  text: String,
  active: Boolean
});

export default mongoose.model('Page', PageSchema);
