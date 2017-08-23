import cityModule from '../app.module';

export default cityModule
    .component('cityModal', {
        bindings: { value: '=' },
        controller: 'cityModalController',
        controllerAs: "cityModal",
        template: require('./views/city-modal.html')
    });