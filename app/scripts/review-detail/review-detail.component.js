'use strict';
console.log('In review detail');
var reviewDetail = angular.module('reviewDetail', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
]).component('reviewDetail', {
  templateUrl: '/review-detail/review-detail.template.html'
});
