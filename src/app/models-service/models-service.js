import cityModule from '../app.module';
import CityModel from './citymodel';

export const ModelsService = cityModule.factory('ModelsService', function() {
    const createCityModel = function(model) {
        return new CityModel(model);
    };
    return {
        createCityModel
    };
});
