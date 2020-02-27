const BASE_URL = 'http://localhost:8080';
const RESOURCE_NAME = 'smartphoneInfoes';
const SMARTPHONE_RESOURCE = `/${RESOURCE_NAME}`;
const SEARCH = '/search';

const REQUEST_OPTIONS = {};

/* returns a Promise */
export function getAll() {
    console.log('getAll()');
    return fetch(BASE_URL + SMARTPHONE_RESOURCE, REQUEST_OPTIONS)
        .then(response => response.json())
        .then(json => json._embedded[RESOURCE_NAME]);
}

/* returns a Promise */
export function findByNameOrManufacturer(searchString) {
    console.log('findByNameOrManufacturer(' + searchString + ')');
    return fetch(`${BASE_URL}${SMARTPHONE_RESOURCE}${SEARCH}/findByNameContainingIgnoreCaseOrManufacturerContainingIgnoreCase?name=${searchString}&manufacturer=${searchString}&projection=listItem`, REQUEST_OPTIONS)
        .then(response => response.json())
        .then(json => json._embedded[RESOURCE_NAME]);
}
export function findById(id) {
    return fetch(`${BASE_URL}${SMARTPHONE_RESOURCE}/${id}`, REQUEST_OPTIONS)
        .then(response => response.json())
}

/* returns a Promise */
export function findByNameOrManufacturerAndPriceCategory(searchString, priceCategory) {
    console.log('findByNameOrManufacturerAndPriceCategory(' + searchString + ', ' + priceCategory + ')');
    return fetch(BASE_URL + SMARTPHONE_RESOURCE + SEARCH + '/findByNameContainingIgnoreCaseAndPriceCategoryOrManufacturerContainingIgnoreCaseAndPriceCategory?name=' + searchString + '&priceCategory1=' + priceCategory + '&manufacturer=' + searchString + '&priceCategory2=' + priceCategory, REQUEST_OPTIONS)
        .then(response => response.json())
        .then(json => json._embedded[RESOURCE_NAME]);
}