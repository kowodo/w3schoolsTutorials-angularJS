'use strict';

angular.module('myApp.017forms', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/forms', {
            templateUrl: '017-Forms/template.html',
            controller: 'formsCtrl'
        });
    }])

    .controller('formsCtrl', ['$scope',
        function ($scope) {

        }])
;