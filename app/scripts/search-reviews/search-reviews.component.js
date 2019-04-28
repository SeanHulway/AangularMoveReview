'use strict';

var searchReviews = angular.module('searchReviews', [])
  .component('searchReviews', {
  templateUrl: '/scripts/search-reviews/search-reviews.template.html',
  bindings: {
  	search: "="
  }
});

searchReviews.controller("SearchReviewsController", ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.$ctrl.search = $stateParams.search;
  console.log($stateParams.search)
}]);
