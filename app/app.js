'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.002Expressions',
  'myApp.003Modules',
  'myApp.004Directives',
  'myApp.005Model',
  'myApp.006DataBinding',
  'myApp.007Controllers',
  'myApp.008Scope',
  'myApp.009Filters',
  'myApp.010Services',
  'myApp.011ajax',
  'myApp.012tables',
  'myApp.version',

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
