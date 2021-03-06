'use strict';

angular.module('myApp.003Modules', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/modules', {
            templateUrl: '003-Modules/template.html',
            controller: 'ModulesCtrl'
        });
    }])

    .controller('ModulesCtrl', ['$scope', function ($scope) {

    }])
    .directive("w3TestDirective", function() {
        return {
            template : "<p>I was made in a directive constructor!</p>"
        };
    });

