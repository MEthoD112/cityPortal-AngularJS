import cityModule from '../app.module';
import CityModel from './citymodel';

export default cityModule.factory('ModelsService', function() {
    function createCityModel(model) {
        return new CityModel(model);
    };
    return {
        createCityModel
    };
});
