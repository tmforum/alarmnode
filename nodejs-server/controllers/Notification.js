'use strict';

var url = require('url');


var Notification = require('./NotificationService');


module.exports.alarmAckStateNotification = function alarmAckStateNotification (req, res, next) {
  Notification.alarmAckStateNotification(req.swagger.params, res, next);
};

module.exports.alarmChangeNotification = function alarmChangeNotification (req, res, next) {
  Notification.alarmChangeNotification(req.swagger.params, res, next);
};

module.exports.alarmClearedNotification = function alarmClearedNotification (req, res, next) {
  Notification.alarmClearedNotification(req.swagger.params, res, next);
};

module.exports.alarmCreateNotification = function alarmCreateNotification (req, res, next) {
  Notification.alarmCreateNotification(req.swagger.params, res, next);
};

module.exports.alarmSyncNotification = function alarmSyncNotification (req, res, next) {
  Notification.alarmSyncNotification(req.swagger.params, res, next);
};
