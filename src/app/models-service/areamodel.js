import { constants } from '../constants';

export default class AreaModel {
    constructor(model) {
        this.area = model.area;
        this.description = model.description;
        this.id = model.id || (Date.now() + (Math.random() * 100).toFixed(0));
        this.citizenAmount = model.citizenAmount;
    }
}