'use strict';

var url = require('url');


var Alarm = require('./AlarmService');


module.exports.alarmCreate = function alarmCreate (req, res, next) {
  Alarm.alarmCreate(req.swagger.params, res, next);
};

module.exports.alarmFind = function alarmFind (req, res, next) {
  Alarm.alarmFind(req.swagger.params, res, next);
};

module.exports.alarmGet = function alarmGet (req, res, next) {
  Alarm.alarmGet(req.swagger.params, res, next);
};

module.exports.alarmPatch = function alarmPatch (req, res, next) {
  Alarm.alarmPatch(req.swagger.params, res, next);
};
