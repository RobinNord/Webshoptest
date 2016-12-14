import * as types from './actionTypes';
import productApi from '../api/mockProductApi';
import fetch from '../../node_modules/isomorphic-fetch';

export function startLoadingProducts() {
    return {type: types.START_LOADING_PRODUCTS, isLoading: true};
}

export function loadingProductsDone() {
    return {type: types.LOADING_PRODUCTS_DONE};
}

export function loadProductsSuccess(products) {
    return {type: types.LOAD_PRODUCTS_SUCCESS, products: products, isLoading: false};
}

export function loadProducts() {
    return function (dispatch) {
        dispatch(startLoadingProducts());

        let url = location.protocol + '//' + location.host + '/';

        return fetch(url + 'api/getAllProducts')
            .then(response => response.json())
            .then(json => {
                dispatch(loadingProductsDone());
                if (json.results) 
                    dispatch(loadProductsSuccess(json.results));
                }
            )
            .catch(error => {
                throw(error);
            });
    };
}