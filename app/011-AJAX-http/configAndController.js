'use strict';

angular.module('myApp.011ajax', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/ajax', {
            templateUrl: '011-AJAX-http/template.html',
            controller: 'ajaxCtrl'
        });
    }])

    .controller('ajaxCtrl', ['$scope', '$location', '$http', '$timeout', '$interval', 'hexafy',
        function ($scope, $location, $http, $timenout, $interval, hexafy) {


    }])
;