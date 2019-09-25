import React from 'react';

// actions here

import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.carReducer,
    additionalPrice: state.additionalPriceReducer
  }
}

export default connect(mapStateToProps, {})(Total);
