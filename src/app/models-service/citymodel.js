import { constants } from '../constants';

export default class CityModel {
    constructor(model) {
        this.name = model.name;
        this.country = model.country;
        this.id = model.id || (Date.now() + (Math.random() * 100).toFixed(0));
        this.isIndustrial = model.isIndustrial;
        this.isCriminal = model.isCriminal;
        this.isPolluted = model.isPolluted;
        this.cityAreas = model.cityAreas || [];
    };

    areasNames() {
        const arr = [];
        this.cityAreas.forEach((area) => {
            arr.push(area.area);
        });
        return arr.join(', ') ? arr.join(', ') : constants.noAreas;
    };

    toogleIndustrial() {
        this.isIndustrial = this.isIndustrial === 'true' ? 'false' : 'true';
        return this;
    };

    toogleCriminal() {
        this.isCriminal = this.isCriminal === 'true' ? 'false' : 'true';
        return this;
    };

    tooglePolluted() {
        this.isPolluted = this.isPolluted === 'true' ? 'false' : 'true';
        return this;
    };
};