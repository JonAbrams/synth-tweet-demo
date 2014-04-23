angular.module('tweetDemo')
.controller('tweetsController', function ($scope, $http) {

  if (preloadedData) {
    $scope.tweets = preloadedData.tweets;
  } else {
    $http.get('/api/tweets').then(function (res) {
      $scope.tweets = res.data.tweets;
    });
  }

});
