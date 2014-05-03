angular.module('tweetDemo')
.controller('tweetsController', function ($scope, $http, data) {
  $scope.tweets = data.tweets;
});
