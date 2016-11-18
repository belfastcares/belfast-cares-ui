'use strict';

angular.module('myApp.organisation', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/organisation', {
            templateUrl: 'src/partials/organisation/organisation.html',
            controller: 'OrganisationCtrl'
        });
    }])

    .controller('OrganisationCtrl', ['$scope', '$http', function ($scope, $http) {

        var organisation = {
            "name": "Welcome Organisation",
            "image": "http://belfastcares.co.uk/media/uploads/organisations/organisation_1_WelcomeOrganisation.jpg",
            "primary_contact": "http://belfastcares.co.uk/api/contacts/1/",
            "address": "http://belfastcares.co.uk/api/address/1/",
            "description": "Every year the Welcome Organisation assists around 1,300 individuals make their journey out of homelessness.",
            "just_giving_link": "http://www.google.co.uk",
            "raised": "10.00",
            "goal": "50.00"
        };

        $scope.organisation = organisation;

    }]);