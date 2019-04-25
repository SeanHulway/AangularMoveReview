'use strict';

angular.module('musicReviewsTestApp').factory('ReviewService', function($resource){
  return $resource("app/scripts/data/movie-reviews.json", {review: '@review'});
});
