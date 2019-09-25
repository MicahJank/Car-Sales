// important to note here, these arent actually the actions being imported here....if you go look at the index.js in the actions folder and see what the value of
// 'ADD_FEATURE' is you will see that it is simply a string, the actual action itself is named addFeature and removeFeature - dont confuse the two! These are just the string
// variables that represent the action.type NOT the action itself 
// Notice below we are using these imported variables in our switch case to check what the action.type is.
import {ADD_FEATURE, REMOVE_FEATURE} from '../actions';

// the initial state..this is what shows up in the 'Additional Features' part of the App. Its an array which means its possible to loop over it with an array function
// like map
const initialState = [
    { id: 1, name: 'V-6 engine', price: 1500, added: false },
    { id: 2, name: 'Racing detail package', price: 1500, added: false },
    { id: 3, name: 'Premium sound system', price: 500, added: false },
    { id: 4, name: 'Rear spoiler', price: 250, added: false }
  ];

  // when you put state = initialState when defining a parameter, then that basically just means you are saying 
  // 'if state has no value, then set it to initialState'. action here is the action that will be dispatched to this reducer, usually that happens in
  // a component somewhere. For example, if you look at the AdditionalFeatures component you will see at the bottom where the export default is, that 2 actions are being dispatched
  // { addFeature, addFeaturePrice }...these actions are being imported from the index.js in the actions folder...and if you look at the index.js in the actions folder you will see
  // that the 'addFeature' function returns an object with a type: ADD_FEATURE (which is also what we imported above)
   const store = (state = initialState, action) => {
      switch(action.type) { // what is the action.type?
        case ADD_FEATURE: // oh..its ADD_FEATURE...in that case....
          return state.map(item => {
            if(item.id === action.payload.id) {
              return {...item, added: true};
            } else return item;
          })
        case REMOVE_FEATURE: // oh..its REMOVE_FEATURE...in that case....
            return state.map(item => {
              if(item.id === action.payload.id) {
                return {...item, added: false};
              } else return item;
            })
        default: // oh..its nothing...then just....
            return state;
      }
  }

  export default store;