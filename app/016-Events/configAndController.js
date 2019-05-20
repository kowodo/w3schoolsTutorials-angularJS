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
            $scope.count = 0;
            $scope.countClick = 0;
            $scope.increaseCountClick = function(){
                $scope.countClick++;
            };
            $scope.showMe = false;
            $scope.toggleShowMe = function(){
                $scope.showMe = !$scope.showMe;
            }
            $scope.eventTest = function(myE){
                $scope.x = myE.clientX;
                $scope.y = myE.clientY;
            }
        }])
;