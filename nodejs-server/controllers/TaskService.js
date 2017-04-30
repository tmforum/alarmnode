'use strict';

exports.alarmClear = function(args, res, next) {
  /**
   * parameters expected in the args:
  * alarm (SystemUserId)
  * alarmId (String)
  * fields (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "ackTime" : "2000-01-23T04:56:07.000+00:00",
  "alarmRaisedTime" : "2000-01-23T04:56:07.000+00:00",
  "alarmClearedTime" : "2000-01-23T04:56:07.000+00:00",
  "alarmedObjectType" : { },
  "@type" : "aeiou",
  "plannedOutageIndication" : { },
  "correlatedAlarm" : [ {
    "id" : "aeiou",
    "href" : "aeiou"
  } ],
  "alarmReportingTime" : "2000-01-23T04:56:07.000+00:00",
  "alarmedObject" : {
    "id" : "aeiou",
    "href" : "aeiou"
  },
  "alarmEscalation" : "",
  "alarmChangedTime" : "2000-01-23T04:56:07.000+00:00",
  "alarmState" : { },
  "perceivedSeverity" : { },
  "probableCause" : "aeiou",
  "affectedService" : [ {
    "id" : "aeiou",
    "href" : "aeiou"
  } ],
  "ackSystemId" : "aeiou",
  "href" : "aeiou",
  "@schemaLocation" : "aeiou",
  "crossedThresholdInformation" : {
    "indicatorName" : "aeiou",
    "thresholdCrossingDescription" : "aeiou",
    "granularity" : "aeiou",
    "observedValue" : "aeiou",
    "thresholdId" : "aeiou",
    "thresholdRef" : "aeiou",
    "indicatorUnit" : "aeiou",
    "direction" : { }
  },
  "externalAlarmId" : "aeiou",
  "clearSystemId" : "aeiou",
  "parentAlarm" : [ "" ],
  "isRootCause" : true,
  "ackUserId" : "aeiou",
  "comments" : [ {
    "systemId" : "aeiou",
    "comment" : "aeiou",
    "time" : "2000-01-23T04:56:07.000+00:00",
    "userId" : "aeiou"
  } ],
  "clearUserId" : "aeiou",
  "serviceAffecting" : true,
  "ackState" : "",
  "alarmType" : "aeiou",
  "specificProblem" : "aeiou",
  "proposedRepairActions" : "aeiou",
  "alarmDetails" : "aeiou",
  "id:" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

