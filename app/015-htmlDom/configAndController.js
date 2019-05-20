'use strict';

angular.module('myApp.015htmldom', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/htmldom', {
            templateUrl: '015-htmlDom/template.html',
            controller: 'htmldomCtrl'
        });
    }])

    .controller('htmldomCtrl', ['$scope',
        function ($scope) {
        }])
;