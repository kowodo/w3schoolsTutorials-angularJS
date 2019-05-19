'use strict';

angular.module('myApp.006DataBinding', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/databinding', {
            templateUrl: '006-DataBinding/template.html',
            controller: 'DataBindingCtrl'
        });
    }])

    .controller('DataBindingCtrl', [ '$scope', function ($scope) {
        $scope.name = "John Doe";
        $scope.firstname = "John";
        $scope.lastname = "Doe";
        $scope.changeName = function(){
            $scope.firstname = 'Sally';
        }
    }])

    ;