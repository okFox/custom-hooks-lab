import React from 'react';
import Dropdown from './Dropdown';
import './QuoteApp.css';
import { useQuotes } from '../Hooks/useQuotes';
import Characters from './Characters';

export const QuoteApp = () => {

  const { number, character, setNumber, setCharacter, arrayForDisplay } = useQuotes();

  const handleSubmit = event => {
    event.preventDefault();
    setCharacter(character);
    setNumber(number);
  };

  const handleCharacterChange = ({ target }) => setCharacter(target.name);
  const handleNumberChange = ({ target }) => setNumber(target.number);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='radios'>
          <Characters onClick={handleCharacterChange} />
        </div>
        <Dropdown onClick={handleNumberChange}/>
        <button>Get Quotes</button>
      </form>

      <section className='displayQuotes'>
        {JSON.stringify(arrayForDisplay)}
      </section>
      
    </> 
  );
};
