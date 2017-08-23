import cityModule from '../app.module';

export default cityModule
    .controller('ModalController', function ModalController(ModelsService, StorageService, ModalService) {
        this.ModalService = ModalService;

        this.toggleColor = function(attr) {
            (ModalService[attr]() === 'true') ? ModalService[attr]('false') : ModalService[attr]('true');
        };

        this.formCity = function() {
            return {
                name: ModalService.CityName(),
                country: ModalService.CountryName(),
                id: Date.now(),
                isIndustrial: ModalService.IsIndustrial(),
                isCriminal: ModalService.IsCriminal(),
                isPolluted: ModalService.IsPolluted(),
                cityAreas: []
            };
        };

        this.addCity = function(cities) {
            if (ModalService.Attr() === 'addcity') {
                const cityModel = ModelsService.createCityModel(this.formCity());
                if (!this.validateCity(cities, cityModel)) {
                    return;
                }
                cities.push(cityModel);
                StorageService.add(cityModel);
                $('#myModal').modal('hide');
            }
        };

        this.editCity = function(cities) {
            if (ModalService.Attr() === 'editcity') {
                let editedCity = ModelsService.createCityModel(this.formCity());
                const city = StorageService.getById(ModalService.Id());
                editedCity.cityAreas = city.cityAreas;
                if (!this.validateEditCity(cities, city, editedCity)) {
                    return;
                }
                let ind;
                cities.forEach((city, index) => {
                    if (city.id == ModalService.Id()) {
                        ind = index;
                    }
                });
                cities.splice(ind, 1, editedCity);
                StorageService.update(city, editedCity);
                $('#myModal').modal('hide');
            }
        };

        this.formArea = function() {
            return {
                area: ModalService.AreaName(),
                description: ModalService.Description(),
                citizenAmount: ModalService.CitizenAmount(),
                id: Date.now()
            };
        };

        this.getCityById = function(id, cities) {
            const city = cities.filter((city) => {
                return city.id == id;
            });
            return city[0];
        };

        this.addArea = function(cities) {
            if (ModalService.Attr() === 'addarea') {
                const area = this.formArea();
                const city = this.getCityById(ModalService.Id(), cities);
                if (!this.validateAddArea(city, area)) {
                    return;
                }
                city.cityAreas.push(area);
                $('#myModal').modal('hide');
            }
        };

        this.getAreaById = function(id, cities) {
            let Area;
            cities.forEach((city) => {
                city.cityAreas.forEach((area) => {
                    if (+area.id === +id) {
                        Area = area;
                    }
                });
            });
            return Area;
        };

        this.editArea = function(cities) {
            if (ModalService.Attr() === 'editarea') {
                let area = this.getAreaById(ModalService.AreaId(), cities);
                const editedArea = this.formArea();
                let City;
                cities.forEach((city) => {
                    city.cityAreas.forEach((area) => {
                        if (area.id === ModalService.AreaId()) {
                            City = city;
                        }
                    });
                });
                if (!this.validateEditArea(City, area, editedArea)) {
                    return;
                }
                cities.forEach((city) => {
                    if (city.cityAreas.indexOf(area) !== -1) {
                        city.cityAreas.splice(city.cityAreas.indexOf(area), 1, editedArea);
                    }
                });
                $('#myModal').modal('hide');
            }
        };

        this.validateCity = function(cities, newCity) {
            if (!ModalService.CityName() || !ModalService.CountryName()) {
                ModalService.CityError('Please, insert the name of the city and country!!!');
                return false;
            }
            let bool = true;
            cities.forEach((city) => {
                if (city.name === newCity.name) {
                    bool = false;
                }
            });
            if (!bool) {
                ModalService.CityError('Such city is already exist!!!');
                return false;
            }
            return true;
        };

        this.validateEditCity = function(cities, currentCity, newCity) {
            if (!ModalService.CityName() || !ModalService.CountryName()) {
                ModalService.CityError('Please, insert the name of the city and country!!!');
                return false;
            }
            if (currentCity.name === newCity.name) {
                return true;
            }
            let bool = true;
            cities.forEach((city) => {
                if (city.name === newCity.name) {
                    bool = false;
                }
            });
            if (!bool) {
                ModalService.CityError('Such city is already exist!!!');
                return false;
            }
            return true;
        };

        this.validateAddArea = function(city, newArea) {
            if (!ModalService.AreaName() || !ModalService.Description() || !ModalService.CitizenAmount()) {
                ModalService.CityError('Please, insert all fields!!!');
                return false;
            }
            if (ModalService.CitizenAmount() < 1) {
                ModalService.CityError('Please, insert correct number of citizens!!!');
                return false;
            }
            let bool = true;
            city.cityAreas.forEach((area) => {
                if (area.area === newArea.area) {
                    bool = false;
                }
            });
            if (!bool) {
                ModalService.CityError('Such area is already exist!!!');
                return false;
            }
            return true;
        };

        this.validateEditArea = function(city, currentArea, editarea) {
            if (!ModalService.AreaName() || !ModalService.Description() || !ModalService.CitizenAmount()) {
                ModalService.CityError('Please, insert all fields!!!');
                return false;
            }
            if (currentArea.area === editarea.area) {
                return true;
            }
            let bool = true;
            city.cityAreas.forEach((area) => {
                if (area.area === editarea.area) {
                    bool = false;
                }
            });
            if (!bool) {
                ModalService.CityError('Such area is already exist!!!');
                return false;
            }
            return true;
        };
    });