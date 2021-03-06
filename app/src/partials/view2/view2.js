'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider ) {
  $routeProvider.when('/view2', {
    templateUrl: 'src/partials/view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http', function($scope, $http) {

    $http.get('http://demo3929519.mockable.io/organisation')
        .then(
            function(response){
                $scope.comics = response.data;
            },
            function(response){
                $scope.comics = response.data;
            }
        );

}]);