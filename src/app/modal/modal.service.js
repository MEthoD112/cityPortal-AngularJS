import cityModule from '../app.module';

export default cityModule
    .factory('ModalService', function() {
        let isIndustrial = 'true';
        let isCriminal = 'false';
        let isPolluted = 'false';
        let title = '';
        let cityName = '';
        let countryName = '';
        let attr = 'add';
        let active = false;
        let areaName = '';
        let description = '';
        let citizenAmount = '';
        let id = '';
        let areaId = '';
        let cityError = '';

        function IsIndustrial(boolString) { return arguments.length ? (isIndustrial = boolString) : isIndustrial; };

        function IsCriminal(boolString) { return arguments.length ? (isCriminal = boolString) : isCriminal; };

        function IsPolluted(boolString) { return arguments.length ? (isPolluted = boolString) : isPolluted; };

        function Title(newTitle) { return arguments.length ? (title = newTitle) : title; };

        function CityName(newName) { return arguments.length ? (cityName = newName) : cityName; };

        function CountryName(newCountry) { return arguments.length ? (countryName = newCountry) : countryName; };

        function Attr(newAttr) { return arguments.length ? (attr = newAttr) : attr; };

        function Mode(newMode) { return arguments.length ? (active = newMode) : active; };

        function AreaName(newName) { return arguments.length ? (areaName = newName) : areaName; };

        function Description(newDesc) { return arguments.length ? (description = newDesc) : description; };

        function CitizenAmount(newAmount) { return arguments.length ? (citizenAmount = newAmount) : citizenAmount; };

        function Id(newId) { return arguments.length ? (id = newId) : id; };

        function AreaId(newId) { return arguments.length ? (areaId = newId) : areaId; };

        function CityError(newError) { return arguments.length ? (cityError = newError) : cityError; };

        function setDefault() {
            isIndustrial = 'true';
            isCriminal = 'false';
            isPolluted = 'false';
            title = 'Add City';
            cityName = '';
            countryName = '';
            attr = 'addcity';
            active = true;
            cityError = '';
        };

        function setAttrsForEdit(model) {
            isIndustrial = model.isIndustrial;
            isCriminal = model.isCriminal;
            isPolluted = model.isPolluted;
            title = 'Edit City';
            cityName = model.name;
            countryName = model.country;
            attr = 'editcity';
            active = true;
            id = model.id;
            cityError = '';
        };

        function setDefaultForArea(Id) {
            title = 'Add Area';
            areaName = '';
            description = '';
            citizenAmount = '';
            active = false;
            attr = 'addarea';
            id = Id;
            cityError = '';
        };

        function setAttrsForAreaEdit(model) {
            title = 'Edit Area';
            areaName = model.area;
            description = model.description;
            citizenAmount = model.citizenAmount;
            active = false;
            attr = 'editarea';
            areaId = model.id;
            cityError = '';
        };

        return {
            IsIndustrial,
            IsCriminal,
            IsPolluted,
            Title,
            CityName,
            CountryName,
            Attr,
            Mode,
            AreaName,
            Description,
            CitizenAmount,
            Id,
            AreaId,
            CityError,
            setDefault,
            setAttrsForEdit,
            setDefaultForArea,
            setAttrsForAreaEdit
        };
    });

