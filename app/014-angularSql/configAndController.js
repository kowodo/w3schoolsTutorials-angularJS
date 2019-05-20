'use strict';

angular.module('myApp.014angularsql', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angularsql', {
            templateUrl: '014-angularSql/template.html',
            controller: 'angularSqlCtrl'
        });
    }])

    .controller('angularSqlCtrl', ['$scope',
        function ($scope) {
        }])
;