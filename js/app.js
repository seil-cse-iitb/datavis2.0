angular.module('datavis', ['ngMaterial','ngRoute','ngResource'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('blue');
})