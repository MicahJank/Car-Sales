import React from 'react';

const AddedFeature = props => {

  const buttonHandler = () => {
    props.remove(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={buttonHandler} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
