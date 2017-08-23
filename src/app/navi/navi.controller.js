import cityModule from '../app.module';
import { constants } from '../constants';

export default cityModule
    .controller('naviController', function naviController(ModalService, NaviService) {
        this.setDefault = ModalService.setDefault;
        this.NaviService = NaviService;

        this.openFilterWindow = function(cities) {
            this.countrySearch = '';
            this.isIndustrial = 'true';
            this.isCriminal = 'false';
            this.isPolluted = 'false';
            const citizenMaxAndMinArr = this.findMinAndMaxValuesOfCitizens(cities);
            $('#min-value-citizens').attr('placeholder', citizenMaxAndMinArr[0] || constants.noAreas);
            $('#max-value-citizens').attr('placeholder', citizenMaxAndMinArr[1] || constants.noAreas);
        };

        this.toggleColor = function(attribute) {
            this[attribute] = this[attribute] === 'true' ? 'false' : 'true';
        };

        this.findMinAndMaxValuesOfCitizens = function(cities) {
            const arr = [];
            cities.forEach((city) => {
                city.cityAreas.forEach((area) => {
                    if (area.citizenAmount) {
                        arr.push(area.citizenAmount);
                    }
                });
            });
            arr.sort((a, b) => { return a - b; });
            return [arr[0], arr[arr.length - 1]];
        };

        this.getCountriesNames = function(cities) {
            const arr = [];
            cities.forEach((city) => {
                if (arr.indexOf(city.country) === -1) {
                    arr.push(city.country);
                }
            });
            return arr;
        };
    });