import React from 'react';
// import { useQuotes } from '../hooks/useQuotes';

export const Dropdown = () => {
  // const number = useQuotes(number);

  return (

    <div className='dropdown'>
      <input type="number" name="userNum" min="1" max="5"></input>
    </div>

  );
};

export default Dropdown;
