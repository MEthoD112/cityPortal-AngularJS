import cityModule from '../app.module';

export default cityModule
    .controller('cityModalController', function cityModalController(ModelsService, StorageService, ModalService) {
        this.ModalService = ModalService;
        this.toggleColor = function(attr) {
            (ModalService[attr]() === 'true') ? ModalService[attr]('false') : ModalService[attr]('true');
        };
    });