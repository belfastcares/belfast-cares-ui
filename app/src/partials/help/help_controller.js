'use strict';

angular.module('myApp.help', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/help', {
    templateUrl: 'src/partials/help/help.html',
    controller: 'HelpCtrl'
  });
}])

.controller('HelpCtrl', [function() {

}]);