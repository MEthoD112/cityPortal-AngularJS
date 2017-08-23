import cityModule from '../app.module';

export default cityModule
    .component('modal', {
        bindings: { value: '=' },
        controller: 'ModalController',
        controllerAs: "modal",
        template: require('./views/modal.html')
    });