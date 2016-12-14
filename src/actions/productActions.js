import * as types from './actionTypes';
import productApi from '../api/mockProductApi';

export function startLoadingProducts() {
    return {type: types.START_LOADING_PRODUCTS};
}

export function loadingProductsDone() {
    return {type: types.LOADING_PRODUCTS_DONE};
}

export function loadProductsSuccess(products) {
    return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function loadProducts() {
    return function (dispatch) {
        dispatch(startLoadingProducts());

        return productApi
            .getAllProducts()
            .then(products => {
                dispatch(loadingProductsDone());
                if (products) 
                    dispatch(loadProductsSuccess(products));
                }
            )
            .catch(error => {
                throw(error);
            });
    };
}