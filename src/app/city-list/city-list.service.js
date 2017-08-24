import cityModule from '../app.module';

export default cityModule
    .factory('StorageService', function($localStorage) {
        $localStorage = $localStorage.$default({
            cities: []
        });

        function getAll() {
            return $localStorage.cities;
        };

        function add(city) {
            $localStorage.cities.push(city);
        };

        function remove(city) {
            $localStorage.cities.splice($localStorage.cities.indexOf(city), 1);
        };

        function getById(id) {
            const cities = $localStorage.cities.filter((city) => {
               return city.id == id;
            });
            return cities[0];
        };

        function update(city, newCity) {
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

