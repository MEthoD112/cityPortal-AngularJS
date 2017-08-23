import cityModule from '../app.module';

export default cityModule
    .factory('StorageService', function($localStorage) {
        $localStorage = $localStorage.$default({
            cities: []
        });

        const getAll = function() {
            return $localStorage.cities;
        };

        const add = function(city) {
            $localStorage.cities.push(city);
        };

        const remove = function(city) {
            $localStorage.cities.splice($localStorage.cities.indexOf(city), 1);
        };

        const getById = function(id) {
            const cities = $localStorage.cities.filter((city) => {
               return city.id == id;
            });
            return cities[0];
        };

        const update = function(city, newCity) {
            $localStorage.cities.splice($localStorage.cities.indexOf(city), 1, newCity);
        };

        return {
            getAll,
            add,
            remove,
            getById,
            update
        };
    });

