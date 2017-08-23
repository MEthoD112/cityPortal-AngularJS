import cityModule from '../app.module';

export default cityModule
    .component('areaList', {
        bindings: { value: '=' },
        controller: 'AreaListController',
        controllerAs: "areaList",
        template: require('./views/area-list.html')
    });