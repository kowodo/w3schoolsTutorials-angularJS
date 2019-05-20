'use strict';

angular.module('myApp.016events', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: '016-Events/template.html',
            controller: 'eventsCtrl'
        });
    }])

    .controller('eventsCtrl', ['$scope',
        function ($scope) {
        }])
;