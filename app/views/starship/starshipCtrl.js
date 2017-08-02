angular.module('starwars').controller('starshipCtrl', function($scope, $stateParams, starshipsSvc) {
    starshipsSvc.getStarship($stateParams.id).then(data => {
        $scope.starship = data;
    });
})