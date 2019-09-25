import React from 'react';

import { addFeature, addFeaturePrice } from '../actions';

import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  const buyFeature = feature => {
    // dipsatch an action here to add an item
    props.addFeature(feature);
    props.addFeaturePrice(feature.price);
  };

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

const mapStateToProps = (state) => {
  return {
    store: state.storeReducer
  }
}

export default connect(mapStateToProps, { addFeature, addFeaturePrice })(AdditionalFeatures);
