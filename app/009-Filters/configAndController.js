'use strict';

angular.module('myApp.009Filters', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/filters', {
            templateUrl: '009-Filters/template.html',
            controller: 'FiltersCtrl'
        });
    }])

    .controller('FiltersCtrl', ['$scope', function ($scope) {
    }])

;