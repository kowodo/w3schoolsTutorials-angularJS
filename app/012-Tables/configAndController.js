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
            $scope.names = [
                {name: 'Jani', country: 'Norway'},
                {name: 'Carl', country: 'Sweden'},
                {name: 'Margareth', country: 'England'},
                {name: 'Hege', country: 'Norway'},
                {name: 'Joe', country: 'Denmark'},
                {name: 'Gustav', country: 'Sweden'},
                {name: 'Birgit', country: 'Denmark'},
                {name: 'Mary', country: 'England'},
                {name: 'Kai', country: 'Norway'}
            ];

        }])
;