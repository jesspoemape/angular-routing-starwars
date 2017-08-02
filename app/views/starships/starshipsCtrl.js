angular.module('starwars').controller('starshipsCtrl', function($scope, starshipsSvc) {
    $scope.data = starshipsSvc.getStarships().then(data => {$scope.data = data});
})