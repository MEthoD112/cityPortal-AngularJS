import cityModule from '../app.module';

export default cityModule
    .component('areaModal', {
        bindings: { value: '=' },
        controller: 'AreaModalController',
        controllerAs: "areaModal",
        template: require('./views/area-modal.html')
    });