// these are the variables that store the string for the action type
// doing it this way will help lessen errors and make debugging easier than if we just hard coded the action type with a string
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_FEATURE_PRICE = 'ADD_FEATURE_PRICE'; 
export const REMOVE_FEATURE_PRICE = 'REMOVE_FEATURE_PRICE'; 

// you may be wondering where 'feature' is coming from and the answer is that its actually being defined where this action is being used.
// notice that we are exporting each of these actions...that means we must be using/importing them somewhere else right? In this case the addFeature action
// is being imported inside the 'AdditionalFeatures.js' component. 
export const addFeature = feature => {
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const addFeaturePrice = featurePrice => {
    return {
        type: ADD_FEATURE_PRICE,
        payload: featurePrice
    }
}

export const removeFeaturePrice = featurePrice => {
    return {
        type: REMOVE_FEATURE_PRICE,
        payload: featurePrice
    }
}