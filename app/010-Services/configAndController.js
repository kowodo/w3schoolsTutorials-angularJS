'use strict';

angular.module('myApp.010Services', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/services', {
            templateUrl: '010-Services/template.html',
            controller: 'ServicesCtrl'
        });
    }])

    .controller('ServicesCtrl', ['$scope', '$location', '$http', '$timeout', '$interval', 'hexafy',
        function ($scope, $location, $http, $timenout, $interval, hexafy) {
        // $http.get("welcome.html").then(function(response){
        //     $scope.myWelcome = response.data;
        //     $scope.myHeader = "Hello World!";
        // })
        $scope.myHeader = "Hello World!<<";
        $timenout(function () {
            $scope.myHeader = "How are you today?";
        }, 2000);

        $scope.theTime = new Date().toLocaleDateString();
        $interval(function () {
            $scope.theTime = new Date();
        }, 1000);

        $scope.hex = hexafy.myFunc(255);

    }])
    .service('hexafy', function () {
        this.myFunc = function (x) {
            return x.toString(16);
        }
    })


;