'use strict';

angular.module('myApp.010Services', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/services', {
            templateUrl: '010-Services/template.html',
            controller: 'ServicesCtrl'
        });
    }])

    .controller('ServicesCtrl', ['$scope', function ($scope) {
    }])


;