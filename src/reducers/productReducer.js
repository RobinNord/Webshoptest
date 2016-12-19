import * as types from '../actions/actionTypes';

export default function productReducer(state = { items: null, isLoading: false }, action) {
    switch (action.type) {
        case types.LOAD_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                items: action.products,
                isLoading: action.isLoading
            })
        case types.START_LOADING_PRODUCTS:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        default:
            return state;
    }
    
}
