'use strict';

angular.module('myApp.007Controllers', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/controllers', {
            templateUrl: '007-Controllers/template.html',
            controller: 'ControllersCtrl'
        });
    }])

    .controller('ControllersCtrl', ['$scope', function ($scope) {
        $scope.firstname = "John";
        $scope.lastname = "Doe";
        // TODO why this does not work in my localhost? Change in AngularJS?
        $scope.fullName = function () {
            return $scope.firstname + " " + $scope.lastname
        };
    }])

;