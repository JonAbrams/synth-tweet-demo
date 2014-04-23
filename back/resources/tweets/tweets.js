exports.getIndex = function (req, res) {
  return req.db.collection('tweets')
    .find()
    .sort({ created_at: -1 })
    .limit(100)
    .toArray()
    .then(function (data) {
      return { tweets: data };
    });
};
