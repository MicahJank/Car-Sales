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

// there are two different pieces of state that are needed for this component. Notice that in the return we have 2 keys the first one, car has the value of the carReducer state
// and the second one, additionalPrice has the value of the additionalPriceReducer state. In the total amount above we are grabbing values from each of these states and combining them
// that is why we needed to grab two states here
const mapStateToProps = (state) => {
  return {
    car: state.carReducer,
    additionalPrice: state.additionalPriceReducer
  }
}

export default connect(mapStateToProps, {})(Total);
