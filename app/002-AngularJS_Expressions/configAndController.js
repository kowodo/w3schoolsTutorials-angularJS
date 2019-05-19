'use strict';

angular.module('myApp.002Expressions', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/expressions', {
            templateUrl: '002-AngularJS_Expressions/template.html',
            controller: 'ExpressionsCtrl'
        });
    }])

    .controller('ExpressionsCtrl', ['$scope', function ($scope) {
        $scope.myCol = 'lightblue';
        $scope.quantity = 1;
        $scope.cost = 5;
        $scope.fistName = 'John';
        $scope.lastName = 'Doe';
        $scope.person={firstName:'John',lastName:'Doe'};
        $scope.points=[1,15,19,2,40];
    }]);