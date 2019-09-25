import React from 'react';

// actions can be imported here
import { removeFeature, removeFeaturePrice } from '../actions';

import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  const remove = feature => {
    props.removeFeature(feature);
    props.removeFeaturePrice(feature.price);
  }

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature remove={remove} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.carReducer
  }
};

export default connect(mapStateToProps, { removeFeature, removeFeaturePrice })(AddedFeatures);
