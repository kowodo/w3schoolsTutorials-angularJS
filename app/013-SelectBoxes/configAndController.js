'use strict';

angular.module('myApp.013selectboxes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/selectboxes', {
            templateUrl: '013-SelectBoxes/template.html',
            controller: 'selectBoxesCtrl'
        });
    }])

    .controller('selectBoxesCtrl', ['$scope',
        function ($scope) {

        }])
;