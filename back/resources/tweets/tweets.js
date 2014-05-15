exports.getIndex = function (req, res) {
  var r = req.r;
  return r.table('tweets')
    .orderBy(r.desc('created_at'))
    .run()
    .then(function (cursor) {
      return cursor.toArray();
    })
    .then(function (data) {
      return { tweets: data };
    });
};

exports.post = function (req, res) {
  return req.r.table('tweets')
    .insert({
      content: req.body.content,
      created_at: new Date()
    }, { returnVals: true })
    .run()
    .then(function (res) {
      return res.new_val;
    });
};
