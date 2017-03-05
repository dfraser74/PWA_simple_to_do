var app = angular.module('app',['ngStorage','ngMaterial']);

app.controller('MainController',['$scope','$localStorage',function($scope, $localStorage){
  $scope.list = [];
  $scope.newItem = '';
  if($localStorage.list){
      $scope.list = $localStorage.list;
    }
  $scope.addToDo = function(){
    if($scope.newItem !== ''){
      $scope.list.push($scope.newItem);
      $scope.newItem = '';
      $localStorage.list = $scope.list;
    }
  }
  $scope.remove = function(index){
      $scope.list.splice(index,1);
      $localStorage.list = $scope.list;
  }
}]);
