  
import { useState, useEffect } from 'react';
import { getQuotesByCharacter } from '../services/quoteAPI';

//userNum will be the number of quotes the user selects that they want to see
const useQuotes = (userNum) => {
  const [quotes, setQuotes] = useState([]);
  const [character, setCharacter] = useState('');
  const [number, setNumber] = useState(1);
  const [arrayForDisplay, setArrayForDisplay] = useState([]);

  useEffect(() => {
    getQuotesByCharacter(character.name)
      .then(setQuotes);
    
  }, [character]);
  
  const getRandomQuotes = number => {
    const pullQuotes = [];
    const quotesCopy = quotes.slice();
    while(userNum >= number){
      let index = Math.floor(Math.random() * (quotesCopy.length - 1));
      pullQuotes.push(quotesCopy.splice(index, 1));
      userNum--;
    }
    return pullQuotes;
  };

  useEffect(() => {
    setArrayForDisplay(getRandomQuotes(number));
    
  }, [number]);
};
