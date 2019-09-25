import { combineReducers } from 'redux';

import storeReducer from './store.js';
import carReducer from './car.js';
import additionalPriceReducer from './additionalPrice.js';

export default combineReducers({
    storeReducer,
    carReducer,
    additionalPriceReducer,
});