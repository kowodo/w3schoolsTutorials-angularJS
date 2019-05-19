'use strict';

angular.module('myApp.004Directives', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/directives', {
            templateUrl: '004-Directives/template.html',
            controller: 'DirectivesCtrl'
        });
    }])

    .controller('DirectivesCtrl', ['$scope', function ($scope) {
        $scope.quantity = 1;
        $scope.price = 5;
    }])
    .directive("w3TestDirective2", function() {
        return {
            restrict: "MACE",
            template : "<div>Made by a directive!</div>"
        };
    });