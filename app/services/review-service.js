'use strict';

angular.module('musicReviewsTestApp').factory('CriticsService', function($resource){
  return $resource("app/scripts/data/critics.json", {critic: '@critic'});
});
