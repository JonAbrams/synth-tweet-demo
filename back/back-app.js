var synth = require('synth');

/* Connect to Mongo DB */
var r = require('rethinkdbdash')({ db: 'tweets' });

/* Provide DB connection to request handlers */
synth.app.use(function (req, res, next) {
  req.r = r;
  next();
});

/* Init and return synth app */
module.exports = synth();
