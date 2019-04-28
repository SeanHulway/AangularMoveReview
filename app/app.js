'use strict';

var musicReviews = angular.module('musicReviewsTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'searchReviews',
    'reviewsList',
    'reviewDetail',
    'criticsList',
    'criticDetail',
    'ui.mask'
  ])
  .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('reviews', {
        url: '/reviews/{search}/{mpaa}/{limit}/{date}/{criticpick}',
        templateUrl: '/scripts/main.html'
      })
      .state('review', {
        url: '/review/{title}/{search}/{mpaa}/{limit}/{date}/{criticpick}',
        template: '<review-detail class = "review"></review-detail>'
      })
      .state('critics', {
        url: '/critics',
        template: '<critics-list class = "critics"></critics-list>'
      })
      .state('critic', {
        url: '/critic/{name}/{search}/{mpaa}/{limit}/{date}/{criticpick}',
        template: '<critic-detail class = "critic"></critic-detail>'
      });
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/reviews/////');
  });
