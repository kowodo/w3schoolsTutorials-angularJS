'use strict';

angular.module('myApp.002Expressions', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/expressions', {
            templateUrl: '002-AngularJS_Expressions/template.html',
            controller: 'ExpressionsCtrl'
        });
    }])

    .controller('ExpressionsCtrl', ['$scope', function ($scope) {
        $scope.firstNameApp = 'AppFirstName';
        $scope.lastNameApp = 'AppLastName';
    }]);