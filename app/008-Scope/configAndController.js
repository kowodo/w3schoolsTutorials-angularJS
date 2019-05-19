'use strict';

angular.module('myApp.008Scope', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/scope', {
            templateUrl: '008-Scope/template.html',
            controller: 'ScopeCtrl'
        });
    }])

    .controller('ScopeCtrl', ['$scope', function ($scope) {
        $scope.names = ["Emil", "Tobias", "Linus"];
    }])

;