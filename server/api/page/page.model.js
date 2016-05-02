'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PageSchema = new mongoose.Schema({
  name: String,
  title: String,
  text: String,
  meta: {
    title: String,
    description: String
  } ,
  active: Boolean
});

export default mongoose.model('Page', PageSchema);
