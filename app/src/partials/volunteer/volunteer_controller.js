'use strict';

angular.module('myApp.volunteer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/volunteer', {
    templateUrl: 'src/partials/volunteer/volunteer.html',
    controller: 'VolunteerCtrl'
  });
}])

.controller('VolunteerCtrl', ['$scope', '$http', function ($scope, $http) {

    var volunteer =
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
      };

  $scope.volunteer = volunteer;

}]);