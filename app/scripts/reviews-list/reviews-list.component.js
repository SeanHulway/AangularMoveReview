'use strict';

var reviewsList = angular.module('reviewsList', [])
  .component('reviewsList', {
  templateUrl: 'app/scripts/reviews-list/reviews-list.template.html',
  bindings: {
    search: "<"
  }
});

reviewsList.controller("ReviewsListController", ['$scope', '$stateParams', 'ReviewService', function($scope, $stateParams, ReviewService) {
  //Pagination at some point?
  $scope.reviews = ReviewService.query();

  $scope.mpaaoptions = {'G':'G', 'PG':'PG', 'PG-13':'PG-13', 'R':'R', '': 'Not Rated'};
  if($stateParams.mpaa){
    $scope.mpaaoption = $stateParams.mpaa;
  }
  if($stateParams.date){
    $scope.date = $stateParams.date;
  }
  $scope.limitOptions = [10, 20, 30, 40, 50];
  if($stateParams.limit){
    $scope.limit = parseInt($stateParams.limit);
  }else{
    $scope.limit = 20;
  };
  if($stateParams.criticpick == 1){
    document.getElementById("criticpick").checked = true;
    $scope.criticpick = 1;
  }else if ($stateParams.criticpick == 0) {
    $scope.criticpick = 0;
  };
}]);
