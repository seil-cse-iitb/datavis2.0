angular.module('datavis')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    })
    .otherwise({
        templateUrl : "templates/home.html"
    });
});