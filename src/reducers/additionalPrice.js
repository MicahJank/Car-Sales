import { ADD_FEATURE_PRICE, REMOVE_FEATURE_PRICE } from '../actions';
const initialState = 0;

const additionalPrice = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE_PRICE:
            return state + action.payload;
        case REMOVE_FEATURE_PRICE:
            return state - action.payload;
        default:
            return state;
    }
}

export default additionalPrice;