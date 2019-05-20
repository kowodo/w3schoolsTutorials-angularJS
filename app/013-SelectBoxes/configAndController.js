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
            $scope.names = ["Emil", "Tobias", "Linus"];
            $scope.cars = [
                {model : "Ford Mustang", color : "red"},
                {model : "Fiat 500", color : "white"},
                {model : "Volvo XC90", color : "black"}
            ];
            $scope.carsObject = {
                car01 : "Ford",
                car02 : "Fiat",
                car03 : "Volvo"
            };
            $scope.carsObject2 = {
                car01 : {brand : "Ford", model : "Mustang", color : "red"},
                car02 : {brand : "Fiat", model : "500", color : "white"},
                car03 : {brand : "Volvo", model : "XC90", color : "black"}
            };
        }])
;