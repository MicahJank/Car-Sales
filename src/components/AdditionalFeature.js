import React from 'react';

const AdditionalFeature = props => {

  const buttonHandler = () => {
    // The user should only be able to enter in a feature once, this if statement will check if the features added key is false and
    // if it is the user can use the buy feature function...if not the user cant...basically this disables the button so the user
    // cant keep buying the item over and over.
    if(!props.feature.added) {
      props.buyFeature(props.feature);
    }
    
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={buttonHandler} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
