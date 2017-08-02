angular.module('starwars').service('starshipsSvc', function($http) {
    this.staticData = 'this is from the service';

    this.getStarships = function() {
        return $http.get('https://swapi.co/api/starships').then(res => {
            return res.data.results.map(e => {
                // this is to get ids from the url property
                e.id = e.url.slice(31, e.url.length - 1) * 1;
                return e;
            })
        }).catch(err => console.log(err));
    }
    this.getStarship = function(id) {
        return $http.get(`https://swapi.co/api/starships/${id}`).then(res => {
        // great place to do data transformations

        return res.data
        }).catch(err => console.log(err));
    }
})