'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', 'favoriteService', 'localStorageService', function($scope, $http, favoriteService, localStorageService) {
    
    $scope.favorites = [];
    
    $scope.unfavorite = function(post) {
        favoriteService.removeFavorite(post.data.title);
        var index = $scope.favorites.indexOf(post);
        $scope.favorites.splice(index, 1);
    }
    
    favoriteService.getAllFavorites().forEach(function (title){
        $scope.favorites.push(favoriteService.getFavorite(title));
    });
    
}]);