// combineReducers is the function that will combine all your seperate reducers into one
import { combineReducers } from 'redux';

// make sure to import all the different reducers that you want to combine
import storeReducer from './store.js';
import carReducer from './car.js';
import additionalPriceReducer from './additionalPrice.js';

// notice that combineReducers takes an OBJECT (see the {}?)...
// inside that object are your reducers that you want to combine
export default combineReducers({
    storeReducer, // NOTE: storeReducer like this is just shorthand for storeReducer: storeReducer
    carReducer,
    additionalPriceReducer,
});



// same as above, just done without the shorthand

// export default combineReducers({
//     storeReducer: storeReducer,
//     carReducer: carReducer,
//     additionalPriceReducer: additionalPriceReducer,
// });