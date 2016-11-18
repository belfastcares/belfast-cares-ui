'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'src/partials/contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {

}]);