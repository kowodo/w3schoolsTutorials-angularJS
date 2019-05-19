'use strict';

angular.module('myApp.010Services', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/services', {
            templateUrl: '010-Services/template.html',
            controller: 'ServicesCtrl'
        });
    }])

    .controller('ServicesCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
        $scope.myUrl = $location.absUrl();
        $http.get("welcome.html").then(function(response){
            $scope.myWelcome = response.data;
        })

    }])


;