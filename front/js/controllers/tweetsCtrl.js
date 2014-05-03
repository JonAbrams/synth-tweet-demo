angular.module('tweetDemo')
.controller('tweetsController', function ($scope, $http, data) {
  $scope.tweets = data.tweets;

  $scope.publish = function () {
    $http.post('/api/tweets', { content: $scope.newTweet }).then(function (res) {
      $scope.tweets.unshift(res.data);
    });
    $scope.newTweet = "";
  };
});
