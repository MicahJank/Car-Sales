import React from 'react';

// import any necessary actions here from the actions/index.js

import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.carReducer // car is the only state needed for this component so thats all i need to get
  }
}

// no actions are dispatched from this component so that is why the {} is blank
export default connect(mapStateToProps, {})(Header);
