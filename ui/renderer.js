import {findByNameOrManufacturer, findByNameOrManufacturerAndPriceCategory} from './dao.js';

let smartphoneInfosHtmlElement;

export function render() {
    const searchString = document.getElementById('searchField').value;
    const priceCategory = document.getElementById('priceCategory').value;

    const searchPromise = priceCategory === 'all price categories' ?
        findByNameOrManufacturer(searchString) :
        findByNameOrManufacturerAndPriceCategory(searchString, getPriceCategoryEnumValue(priceCategory));

    searchPromise.then(smartphoneInfos => {
        if (smartphoneInfosHtmlElement) {
            document.body.removeChild(smartphoneInfosHtmlElement);
            smartphoneInfosHtmlElement = undefined;
        }

        smartphoneInfosHtmlElement = document.createElement('ul');

        for (let element of smartphoneInfos) {
            let listElement = document.createElement('li');
            listElement.innerHTML = `<a href='/details.html?id=${element.id}'>${element.manufacturer} ${element.name}</a>`;
            smartphoneInfosHtmlElement.appendChild(listElement);
        }

        document.body.appendChild(smartphoneInfosHtmlElement)
    });
}

function getPriceCategoryEnumValue(priceCategoryString) {
    switch(priceCategoryString) {
        case 'starter model':
            return 'STARTER_MODEL';
        case 'normal':
            return 'NORMAL';
        case 'high end':
            return 'HIGH_END';
    }
}

// Put function on window to make it callable from HTML button
window.render = render;
render();
