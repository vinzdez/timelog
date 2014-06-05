/**
 * Created by petersamaan on 5/19/14.
 */
/* global angular */
'use strict';

var timelog = angular.module('timelog', [
    'ngRoute',
    'ngAnimate',
    'timelogControllers',
    'timelogDirectives'
]);
timelog.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/profile', controller: 'PersonalPageController'}).
        otherwise({redirectTo: '/'});
}]);

timelog.run(['$rootScope', function($rootScope) {

    $rootScope.alertMessage = [];

}]);

