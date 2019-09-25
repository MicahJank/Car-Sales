import { ADD_FEATURE_PRICE, REMOVE_FEATURE_PRICE } from '../actions';

// this reducer only deals with the additional price state
// if you look at the 'Total.js' component you will see what i mean
// there you can see we are adding the car price to the additional price
// since at the start of the app no additional parts have been added the initalState should be 0
const initialState = 0;

const additionalPrice = (state = initialState, action) => {
    switch(action.type) {
        // remember action.payload comes from the index.js in the actions folder. Look at the addFeaturePrice function
        case ADD_FEATURE_PRICE:
            return state + action.payload;
        case REMOVE_FEATURE_PRICE:
            return state - action.payload;
        default:
            return state;
    }
}

export default additionalPrice;