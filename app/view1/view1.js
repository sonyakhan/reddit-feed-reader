'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 'redditService', 'favoriteService', 'moment', 'localStorageService', function($scope, $http, redditService, favoriteService, moment, localStorageService) {
    
    
    $scope.favorite = function(post) {
        favoriteService.setFavorite(post);
    }
    
    $scope.unfavorite = function(title) {
        favoriteService.removeFavorite(title);
    }
    
    redditService.get()
        .then(function(data) {
            $scope.data = data.data.data.children;
            console.log($scope.data);
    });
    
}]);