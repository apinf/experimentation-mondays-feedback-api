'use strict';

exports.addFeedback = function(args, res, next) {
  /**
   * Creates a new feedback for an experimentation monday.
   *
   * feedback NewFeedback Feedback to add.
   * returns feedback
   **/
  var examples = {};
  examples['application/json'] = {
  "anticipation" : "aeiou",
  "learning" : "aeiou",
  "comment" : "aeiou",
  "id" : 123456789,
  "feeling" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

