var API_ROOT = "http://10.129.23.41:8080/meta/"
angular.module('datavis')

.controller('HomeCtrl', function($scope,$http) {
  $http.get(API_ROOT+'channels').then(function(res){
  	$scope.channels = res.data;
  })
})