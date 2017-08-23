import cityModule from '../app.module';

export default cityModule
    .controller('AreaModalController', function(ModalService) {
        this.ModalService = ModalService;
    });