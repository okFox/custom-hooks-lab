  
import { useState, useEffect } from 'react';
import { getQuotesByCharacter } from '../services/quoteAPI';

export const useQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [character, setCharacter] = useState('Bender');
  const [number, setNumber] = useState(3);
  const [arrayForDisplay, setArrayForDisplay] = useState([]);

  useEffect(() => {
    getQuotesByCharacter(character)
      .then(setQuotes);
    
  }, [character]);
  
  const getRandomQuotes = number => {
    const pullQuotes = [];
    const quotesCopy = quotes.slice();
    let i;
    for(i = 0; i < number; i++){
      const index = Math.floor(Math.random() * (quotesCopy.length - 1));
      const [pushMe] = quotesCopy.splice(index, 1);
      pullQuotes.push(pushMe);
    }
    return pullQuotes;   
  };

  useEffect(() => {
    setArrayForDisplay(getRandomQuotes(number));
    
  }, [quotes, number]);

  return { character, setCharacter, number, setNumber, quotes, arrayForDisplay };
};
