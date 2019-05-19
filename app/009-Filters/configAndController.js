'use strict';

angular.module('myApp.009Filters', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/filters', {
            templateUrl: '009-Filters/template.html',
            controller: 'FiltersCtrl'
        });
    }])

    .controller('FiltersCtrl', ['$scope', function ($scope) {
        $scope.name = 'Stepan';
        $scope.names = [
            {name:'Jani',country:'Norway'},
            {name:'Carl',country:'Sweden'},
            {name:'Margareth',country:'England'},
            {name:'Hege',country:'Norway'},
            {name:'Joe',country:'Denmark'},
            {name:'Gustav',country:'Sweden'},
            {name:'Birgit',country:'Denmark'},
            {name:'Mary',country:'England'},
            {name:'Kai',country:'Norway'}
        ];
        $scope.orderByMe = function(what){
            $scope.myOrderBy = what;
        }
        $scope.names2 = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai'];
    }])
    .filter('myFormat', function() {
        return function(x) {
            var i, c, txt = "";
            for (i = 0; i < x.length; i++) {
                c = x[i];
                if (i % 2 == 0) {
                    c = c.toUpperCase();
                }
                txt += c;
            }
            return txt;
        };
    })

;