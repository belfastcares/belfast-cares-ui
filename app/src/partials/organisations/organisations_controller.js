'use strict';

angular.module('myApp.organisations', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/organisations', {
            templateUrl: 'src/partials/organisations/organisations.html',
            controller: 'OrganisationsCtrl'
        });
    }])

    .controller('OrganisationsCtrl', ['$scope', '$http', function ($scope, $http) {

        var organisations = [{
            "name": "Welcome Organisation",
            "image": "http://belfastcares.co.uk/media/uploads/organisations/organisation_1_WelcomeOrganisation.jpg",
            "primary_contact": "http://belfastcares.co.uk/api/contacts/1/",
            "address": "http://belfastcares.co.uk/api/address/1/",
            "description": "Every year the Welcome Organisation assists around 1,300 individuals make their journey out of homelessness.",
            "just_giving_link": "http://www.google.co.uk",
            "raised": "10.00",
            "goal": "50.00"
        },
            {
                "name": "St. Vincent de Paul",
                "image": "http://belfastcares.co.uk/media/uploads/organisations/organisation_2_StVincentdePaul.jpg",
                "primary_contact": "http://belfastcares.co.uk/api/contacts/2/",
                "address": "http://belfastcares.co.uk/api/address/5/",
                "description": "No work of charity is foreign to the society. Our work through person to person contact encompasses every form of aid that alleviates suffering and promotes the dignity of mankind. The society strives not only to alleviate need but also to discover and redress the situations which cause it. It services everyone in need, regardless of creed, opinion,colour, origin or caste.",
                "just_giving_link": "http://www.twitter.com",
                "raised": "60.00",
                "goal": "500.00"
            },
            {
                "name": "Council for the Homeless NI",
                "image": "http://belfastcares.co.uk/media/uploads/organisations/organisation_3_CouncilfortheHomelessNI.jpg",
                "primary_contact": "http://belfastcares.co.uk/api/contacts/3/",
                "address": "http://belfastcares.co.uk/api/address/3/",
                "description": "Founded in 1983, we are the sole representative organisation for those working with and supporting homeless people across Northern Ireland. We are the independent voice of the sector.",
                "just_giving_link": "http://www.reddit.com",
                "raised": "5.00",
                "goal": "1000.00"
            },
            {
                "name": "Simon Community",
                "image": "http://belfastcares.co.uk/media/uploads/organisations/organisation_4_SimonCommunity.jpg",
                "primary_contact": "http://belfastcares.co.uk/api/contacts/4/",
                "address": "http://belfastcares.co.uk/api/address/4/",
                "description": "Established in 1971 in response to a homelessness crisis in Belfast, Simon Community has grown to become Northern Ireland's leading homelessness charity and service provider. From a beginning of just one house, two full time staff and a few volunteers in Belfast, Simon Community NI now helps over 3000 people every year across 22 projects throughout Northern Ireland with a staff count of 300 and 50 volunteers. We work without judgement to support people who are, or are at risk of, becoming homeless.",
                "just_giving_link": "http://www.youtube.com",
                "raised": "5100.00",
                "goal": "5000.00"
            }];

        $scope.organisations = organisations;

    }]);