import cityModule from '../app.module';

export default cityModule
    .controller('AreaListController', function(ModalService, NaviService) {
        this.setAttrsForAreaEdit = ModalService.setAttrsForAreaEdit;
        this.NaviService = NaviService;

        this.deleteArea = function(area, city) {
            city.cityAreas.splice(city.cityAreas.indexOf(area), 1);
        };
    });