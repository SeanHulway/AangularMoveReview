'use strict';

var criticDetail = angular.module('criticDetail', [])
  .component('criticDetail', {
  templateUrl: '/scripts/critic-detail/critic-detail.template.html'
});

criticDetail.controller("CriticController", ['$scope', '$filter', '$stateParams','$http', function($scope, $filter, $stateParams, $http, ReviewService) {
  $scope.searchParams = $stateParams.search;
  $scope.mpaaParams = $stateParams.mpaa;
  $scope.limitParams = $stateParams.limit;
  $scope.dateParams = $stateParams.date;
  $scope.criticpickParams = $stateParams.criticpick;

  $http.get("app/scripts/data/critics.json").then(function(data){
    $scope.critic = data.data.find(critic => critic.display_name.toUpperCase() === $stateParams.name.toUpperCase());
    if(!$scope.critic){
      $scope.name = $stateParams.name.toUpperCase();
    } else {
      $scope.name = $scope.critic.display_name;
    }
    $http.get("app/scripts/data/movie-reviews.json").then(function(data){
      $scope.reviews = data.data;
      $scope.reviewed = $filter('filter')($scope.reviews, {byline: $scope.name});
      $scope.picks = $filter('filter')($scope.reviewed, {critics_pick: '1'}).length;
    });
  });

}]);
