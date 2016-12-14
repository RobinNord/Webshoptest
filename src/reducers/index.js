import {combineReducers} from 'redux';
import courses from './courseReducer';
import products from './productReducer';

const rootReducer = combineReducers({
    courses,
    products
});

export default rootReducer;