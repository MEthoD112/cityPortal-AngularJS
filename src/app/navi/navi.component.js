import cityModule from '../app.module';

export default cityModule
    .component('navi', {
        bindings: { value: '=' },
        controller: 'naviController',
        controllerAs: "navi",
        template: require('./views/navi.html')
    });