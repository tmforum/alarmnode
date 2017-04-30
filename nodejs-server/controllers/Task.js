'use strict';

var url = require('url');


var Task = require('./TaskService');


module.exports.alarmClear = function alarmClear (req, res, next) {
  Task.alarmClear(req.swagger.params, res, next);
};
