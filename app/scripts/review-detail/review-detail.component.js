'use strict';

var reviewDetail = angular.module('reviewDetail', [])
  .component('reviewDetail', {
  templateUrl: 'app/scripts/review-detail/review-detail.template.html'
});

reviewDetail.controller("ReviewController", ['$scope', '$stateParams','$http', 'ReviewService', function($scope, $stateParams, $http, ReviewService) {
  $scope.searchParams = $stateParams.search;
  $scope.mpaaParams = $stateParams.mpaa;
  $scope.limitParams = $stateParams.limit;
  $scope.dateParams = $stateParams.date;
  $scope.criticpickParams = $stateParams.criticpick;

  $http.get("app/scripts/data/movie-reviews.json").then(function(data){
    $scope.review = data.data.find(review => review.display_title === $stateParams.title);
  });

}]);
