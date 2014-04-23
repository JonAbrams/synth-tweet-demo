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

});
