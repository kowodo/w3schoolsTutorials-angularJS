'use strict';

angular.module('myApp.005Model', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/model', {
            templateUrl: '005-Model/template.html',
            controller: 'ModelCtrl'
        });
    }])

    .controller('ModelCtrl', [ '$scope', function ($scope) {
        $scope.name = "John Doe"
    }])

    ;