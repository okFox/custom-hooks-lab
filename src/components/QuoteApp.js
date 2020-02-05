import React from 'react';
import Dropdown from './Dropdown';
import './QuoteApp.css';
import { useQuotes } from '../Hooks/useQuotes';
import Characters from './Characters';

export const QuoteApp = () => {

  const { number, character, setNumber, setCharacter, arrayForDisplay } = useQuotes();

  const handleSubmit = event => {
    
    event.preventDefault();
    // setCharacter(character);
    // setNumber(number);
  };

  const handleCharacterChange = ({ target }) => setCharacter(target.id);
  const handleNumberChange = ({ target }) => setNumber(target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='radios'>
          <Characters character={character} onChange={handleCharacterChange} />
        </div>
        <Dropdown number={number} onChange={handleNumberChange}/>
        <button>Get Quotes</button>
      </form>

      <section className='displayQuotes'>
        {JSON.stringify(arrayForDisplay)}
      </section>
      
    </> 
  );
};
