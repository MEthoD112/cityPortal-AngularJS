import cityModule from '../app.module';

export default cityModule
    .controller('Controller', function Controller(StorageService, ModalService, NaviService) {
        this.setAttrsForEdit = ModalService.setAttrsForEdit;
        this.setDefaultForArea = ModalService.setDefaultForArea;
        this.NaviService = NaviService;
        this.saveToggling = function(city) {
            const localStorageCity = StorageService.getById(city.id);
            StorageService.update(localStorageCity, city);
        };

        this.deleteCity = function(city, collection) {
            collection.splice(collection.indexOf(city), 1);
            StorageService.remove(city);
        };
    });