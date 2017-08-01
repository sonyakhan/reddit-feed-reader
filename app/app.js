'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'angularMoment',
  'LocalStorageModule',   
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
.config(['$locationProvider', '$routeProvider', 'localStorageServiceProvider', function($locationProvider, $routeProvider, localStorageServiceProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
  localStorageServiceProvider.setPrefix('feed');
}])

.service('redditService', function($http) {
    
    // GET request to fetch r/cats data from Reddit
    
    this.get = function() {
        return $http({
            method: 'GET',
            url: 'https://www.reddit.com/r/cats/top/.json',
            params: {
                limit: 100
            }
        })
        .then(function (res) {
            return res;
        }, function (err) {
            console.error(err);
        });      
    }
})

.service('favoriteService', function(localStorageService) {
    
    // service to handle favorite logic, persists data using Local Storage
    
    this.setFavorite = function(post) {
        return localStorageService.set(post.data.title, post);
    }
    
    this.getFavorite = function(title) {
        return localStorageService.get(title);
    }
    
    this.removeFavorite = function(title) {
        return localStorageService.remove(title);
    }
    
    this.getAllFavorites = function() {
        return localStorageService.keys();
    }
    
});