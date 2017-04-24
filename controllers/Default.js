'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addFeedback = function addFeedback (req, res, next) {
  Default.addFeedback(req.swagger.params, res, next);
};
