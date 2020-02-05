import React from 'react';




export const getQuotesByCharacter = characterName => {
  return fetch(`https://cors-anywhere.herokuapp.com/futuramaapi.herokuapp.com/api/characters/${characterName}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(characterQuotes => characterQuotes.map(({ text: quote }) => ({
      quote
    })));
};











// export const fetchQuote = () => {
//     return fetch('https://futuramaapi.herokuapp.com/api/quotes/10')
//       .then(res => res.json())
//       .then(([{ quote, character, image }]) => ({
//         text: quote,
//         name: character,
//         img: image
//       }));
//   };

// futuramaapi.herokuapp.com/api/characters/<character name> get all quotes by character
