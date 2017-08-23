import cityModule from './app.module';

export default cityModule
    .controller('AppController', function AppController(ModelsService, StorageService) {
        const cityList = this;
        cityList.cities = StorageService.getAll() || [];
        cityList.cities = cityList.cities.map((city) => {
            city.cityAreas = city.cityAreas.map((area) => {
                return area;
            });
            return ModelsService.createCityModel(city);
        });
    });