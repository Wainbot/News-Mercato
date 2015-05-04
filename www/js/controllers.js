'use strict';

angular.module('starter.controllers', [])

.controller('ChatCtrl', function($scope) {
})

.controller("MercatoCtrl", ['$scope','Mercato', function ($scope, Feed) {
    $scope.mercato = Feed.parseFeed();
}])

.controller('MercatoDetailCtrl', function($scope, $stateParams, Mercato) {
        $scope.post = Mercato.get();
        $scope.post = $scope.post[$stateParams.mercatoId - 1]
})

.controller('ParamCtrl', function($scope) {
});