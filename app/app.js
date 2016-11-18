'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
        'ngRoute',
        'myApp.home',
        'myApp.contact',
        'myApp.help',
        'myApp.organisations',
        'myApp.organisation',
        'myApp.volunteers',
        'myApp.volunteer',
        'myApp.view2',
        'myApp.version',
        'myApp.apiservice'
    ])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRFToken'] = '269497c8a091c63de66f3503baaaa58279be7274';
    }])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);


