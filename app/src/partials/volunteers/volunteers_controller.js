'use strict';

angular.module('myApp.volunteers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/volunteers', {
    templateUrl: 'src/partials/volunteers/volunteers.html',
    controller: 'VolunteersCtrl'
  });
}])

.controller('VolunteersCtrl', ['$scope', '$http', function ($scope, $http) {

    var volunteers = [
      {
        "first_name": "Ian",
        "surname": "Paranoid",
        "occupation": "volunteer",
        "about_me": "volunteer",
        "experience": "volunteering",
        "training": "professional volunteer",
        "facebook_link": "http://www.facebook.com/private",
        "twitter_link": "",
        "email": "private@private.com",
        "image": "https://s3-eu-west-1.amazonaws.com/belfast-cares-volunteers/volunteer_profile_image/volunteer_kyle_harrison_01.jpg"
      },
      {
        "first_name": "Bob",
        "surname": "Builder",
        "occupation": "Builder",
        "about_me": "I build",
        "experience": "professional builder for all the years",
        "training": "building certification",
        "facebook_link": "",
        "twitter_link": "",
        "email": "bob@builder.com",
        "image": "https://s3-eu-west-1.amazonaws.com/belfast-cares-volunteers/volunteer_profile_image/volunteer_kyle_harrison_01.jpg"
      },
      {
        "first_name": "Joe",
        "surname": "Volunteer",
        "occupation": "Volunteer",
        "about_me": "I like to volunteer",
        "experience": "Volunteering",
        "training": "professional volunteer",
        "facebook_link": "http://www.facebook.com/volunteer",
        "twitter_link": "http://www.twitter.com/volunteer",
        "email": "volunteer@volunteer.com",
        "image": "https://s3-eu-west-1.amazonaws.com/belfast-cares-volunteers/volunteer_profile_image/volunteer_kyle_harrison_01.jpg"
      },
      {
        "first_name": "Kyle",
        "surname": "Harrison",
        "occupation": "Software Developer",
        "about_me": "I like to help where I can!",
        "experience": "No formal experience",
        "training": "No formal training",
        "facebook_link": "",
        "twitter_link": "",
        "email": "kyle90adam@hotmail.com",
        "image": "https://s3-eu-west-1.amazonaws.com/belfast-cares-volunteers/volunteer_profile_image/volunteer_kyle_harrison_01.jpg"
      }
    ];

  $scope.volunteers = volunteers;

}]);