'use strict';

var musicReviews = angular.module('musicReviewsTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('reviews', {
        url: '/reviews',
        templateUrl: '/scripts/main.html'
      })
      .state('review', {
        url: '/review/{title}',
        templateUrl: '/scripts/review-detail/review-detail.template.html'
      })
      .state('critics', {
        url: '/critics',
        templateUrl: '/scripts/critics-list/critics-list.template.html'
      })
      .state('critic', {
        url: '/critic/{name}',
        templateUrl: '/scripts/critic-detail/critic-detail.template.html'
      });
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/reviews');
  });

musicReviews.controller("MusicReviewsListController", ['$scope', '$http', 'ReviewService', function($scope, $http, ReviewService) {

  // move to custom component
  $scope.limitOptions = 'publication_date';
  $scope.mpaaoptions = ['G', 'PG', 'PG-13', 'R'];

  $scope.limit = 20;
  $scope.limitOptions = [10, 20, 30, 40, 50];

  $scope.reviews = ReviewService.query();

}]);

musicReviews.controller("ReviewController", ['$scope', '$stateParams','$http', 'ReviewService', function($scope, $stateParams, $http, ReviewService) {

  $http.get("app/scripts/data/movie-reviews.json").then(function(data){
    $scope.review = data.data.find(review => review.display_title === $stateParams.title);
  });

}]);


musicReviews.controller("CriticController", ['$scope', '$filter', '$stateParams','$http', function($scope, $filter, $stateParams, $http) {

  $http.get("app/scripts/data/critics.json").then(function(data){
    $scope.critic = data.data.find(critic => critic.display_name.toUpperCase() === $stateParams.name.toUpperCase());
    $http.get("app/scripts/data/movie-reviews.json").then(function(data){
      $scope.reviews = data.data;
      $scope.reviewed = $filter('filter')($scope.reviews, {byline: $scope.critic.display_name});
      $scope.picks = $filter('filter')($scope.reviewed, {critics_pick: '1'}).length;
    });
  });

}]);

musicReviews.controller("CriticsListController", ['$scope', '$stateParams','$http', 'CriticsService', function($scope, $stateParams, $http, CriticsService) {

  $scope.critics = CriticsService.query();

}]);
