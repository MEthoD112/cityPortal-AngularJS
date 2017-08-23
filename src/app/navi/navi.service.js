import cityModule from '../app.module';

export default cityModule
    .factory('NaviService', function() {
        let cityName;
        let countryName;
        let isIndustrial;
        let isCriminal;
        let isPolluted;
        let minCitizen;
        let maxCitizen;

        function CityName(newName) { return arguments.length ? (cityName = newName) : cityName; };

        function CountryName(newName) { return arguments.length ? (countryName = newName) : countryName; };

        function IsIndustrial(boolString) { return arguments.length ? (isIndustrial = boolString) : isIndustrial; };

        function IsCriminal(boolString) { return arguments.length ? (isCriminal = boolString) : isCriminal; };

        function IsPolluted(boolString) { return arguments.length ? (isPolluted = boolString) : isPolluted; };

        function MinCitizen(newAmount) { return arguments.length ? (minCitizen = newAmount) : minCitizen; };

        function MaxCitizen(newAmount) { return arguments.length ? (maxCitizen = newAmount) : maxCitizen; };

        function Reset() {
            cityName = '';
            countryName = '';
            isIndustrial = '';
            isCriminal = '';
            isPolluted = '';
            minCitizen = undefined;
            maxCitizen = undefined;
        };

        function ResetExceptCitizen() {
            cityName = '';
            countryName = '';
            isIndustrial = '';
            isCriminal = '';
            isPolluted = '';
        };

        function filterByRange(fieldName, minValue, maxValue) {
            if (minValue === undefined) minValue = 1;
            if (maxValue === undefined) maxValue = Number.MAX_VALUE;
            return function predicateFunc(item) {
                return +minValue <= +item[fieldName] && +item[fieldName] <= +maxValue;
            };
        };

        function filterByLength(minValue, maxValue) {
            if (!minValue && !maxValue) {
                return function predicateFunc(item) {
                    return item;
                };
            }
            return function predicateFunc(item) {
                let bool = false;
                for (let i = 0; i < item.cityAreas.length; i++) {
                    if (+minValue <= +item.cityAreas[i].citizenAmount && +item.cityAreas[i].citizenAmount <= +maxValue) {
                        bool = true;
                    }
                }
                if (bool) { return item; }
            };
        };

        return {
            CityName,
            CountryName,
            IsIndustrial,
            IsCriminal,
            IsPolluted,
            MinCitizen,
            MaxCitizen,
            Reset,
            ResetExceptCitizen,
            filterByRange,
            filterByLength
        };
    });