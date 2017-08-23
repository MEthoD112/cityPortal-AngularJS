import cityModule from '../app.module';

export default cityModule
    .component('cityList', {
        bindings: { value: '=' },
        controller: 'Controller',
        controllerAs: "cityList",
        template: require('./views/city-list.html')
    });