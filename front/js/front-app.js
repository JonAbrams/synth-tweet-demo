angular.module('tweetDemo', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/tweets', {
    templateUrl: '/html/tweets/getIndex.html',
    controller: 'tweetsController'
  })
  .otherwise({
    redirectTo: '/tweets'
  });

  $locationProvider.html5Mode(true);
});
