// Remember NOT the actions themselves being imported...but the variables that represent our action.type!
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

// like all reducers we have an initalState, but we are dealing with different state in this reducer...in our store.js for example we were dealing with state that
// is responsible for what is inside the 'AdditionalFeatures' component. This state is dealing with what is inside our 'Header.js' component and our 'AddedFeatures'. 
// Also notice that our 'features' key contains an empty array. This is because at the beginning of our app, the user has not added any features to the car yet.
const initialState = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  }

  const car = (state = initialState, action) => {
      switch(action.type) {
        // in the case that an 'ADD_FEATURE' action is dispatched we need to return a new object {}.
        // inside that object we need to make sure we get the current state and spread it into our new object like so { ...state }
        // thats not enough though, because we also need to add the new feature to our 'features' array right?
        // to do that we need to not only spread in the old state but define/update the features key on that state
        // { ...state, features: [new feature should go here]}
        // To add a new feature to the array we must pass in the action.payload...this is because in our index.js in our actions folder...inside our addFeature function
        // ...what is our payload equal to? the feature!
        // also we cant just go features: [action.payload] either because each time this action is dispatched it would return a new features array with ONLY the new feature..
        // we want to keep a list of ALL the features we have added, not just the new one. So to fix that you need to spread in the OLD features array and THEN add the new one
        // features: [...state.features, action.payload]
        case ADD_FEATURE:
          return {
            ...state,
            features: [...state.features, action.payload]
          }
        case REMOVE_FEATURE:
          return {
            ...state,
            features: state.features.filter(feature => feature.id !== action.payload.id)
          }
        default:
          return state;
      }
  }

  export default car;