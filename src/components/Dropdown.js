import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({ onChange }) => {
  return (
    <div className='dropdown'>
      <input type="number" name="userNum" min="1" max="5" onChange={onChange} ></input>
    </div>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
