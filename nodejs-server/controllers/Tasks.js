'use strict';

var url = require('url');


var Tasks = require('./TasksService');


module.exports.ackAlarms = function ackAlarms (req, res, next) {
  Tasks.ackAlarms(req.swagger.params, res, next);
};

module.exports.clearAlarms = function clearAlarms (req, res, next) {
  Tasks.clearAlarms(req.swagger.params, res, next);
};

module.exports.groupAlarms = function groupAlarms (req, res, next) {
  Tasks.groupAlarms(req.swagger.params, res, next);
};

module.exports.unackAlarms = function unackAlarms (req, res, next) {
  Tasks.unackAlarms(req.swagger.params, res, next);
};

module.exports.ungroupAlarms = function ungroupAlarms (req, res, next) {
  Tasks.ungroupAlarms(req.swagger.params, res, next);
};
