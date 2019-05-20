'use strict';

angular.module('myApp.012tables', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tables', {
            templateUrl: '012-Tables/template.html',
            controller: 'tablesCtrl'
        });
    }])

    .controller('tablesCtrl', ['$scope',
        function ($scope) {


    }])
;