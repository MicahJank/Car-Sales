import React from 'react';

// addFeature and addFeaturePrice are both actions from the actions folders index.js
import { addFeature, addFeaturePrice } from '../actions';

import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  // We need to dispatch the addFeature and addFeaturePrice actions and pass in the feature/feature price we want added.
  // feature is not defined here, thats because this whole function is being passed down to the AdditionalFeature component. (Remember that is where the actual add button is which
  // means that the buyFeature function needs to be passed down for the button to be able to call it onClick)
  const buyFeature = feature => {
    props.addFeature(feature);
    props.addFeaturePrice(feature.price);
  };


  // notice that in the map not only are we passing in the buyFeature function as a prop but each individual 'feature' is also being passed down as a prop..this is important
  // because our buyFeature function is going to need to use the feature prop
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature buyFeature={buyFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// state is what holds alll of our combined reducers...in order to grab the one we need(the storeReducer) we will have to go through state first
const mapStateToProps = (state) => {
  return {
    store: state.storeReducer
  }
}

export default connect(mapStateToProps, { addFeature, addFeaturePrice })(AdditionalFeatures);
