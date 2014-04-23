angular.module('tweetDemo')
.controller('tweetsController', function ($scope, $http) {

  if (preloadedData) {
    $scope.tweets = preloadedData.tweets;
    preloadedData = null;
  } else {
    $http.get('/api/tweets').then(function (res) {
      $scope.tweets = res.data.tweets;
    });
  }

  $scope.publish = function () {
    $http.post('/api/tweets', { tweet: $scope.newTweet }).then(function (res) {
      $scope.tweets.unshift(res.data);
    });
    $scope.newTweet = "";
  };

});
