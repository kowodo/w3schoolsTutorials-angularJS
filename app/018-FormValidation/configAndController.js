'use strict';

angular.module('myApp.018formvalidation', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/formvalidation', {
            templateUrl: '018-FormValidation/template.html',
            controller: 'formValidationCtrl'
        });
    }])

    .controller('formValidationCtrl', ['$scope',
        function ($scope) {
        }])
;