'use strict';

var criticsList = angular.module('criticsList', []);
criticsList.component('criticsList', {
  templateUrl: '/scripts/critics-list/critics-list.template.html'
});

criticsList.controller("CriticsListController", ['$scope', '$filter', '$stateParams','$http', 'CriticsService', 'ReviewService', function($scope, $filter, $stateParams, $http, CriticsService, ReviewService) {
  $scope.critics = CriticsService.query();
  $scope.reviews = ReviewService.query();

  $scope.reviewed = function reviewed(criticName){
    return $filter('filter')($scope.reviews, {byline: criticName}).length
  };
  $scope.picked = function picked(criticName){
    return $filter('filter')($scope.reviews, {critics_pick: '1', byline: criticName}).length
  };
}]);
