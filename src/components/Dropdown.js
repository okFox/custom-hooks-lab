import React from 'react';
import PropTypes from 'prop-types';
// import { useQuotes } from '../hooks/useQuotes';

export const Dropdown = ({ onChange }) => {
  // const number = useQuotes(number);

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
