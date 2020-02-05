import React from 'react';




const getQuotesByCharacter = characterName => {
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


//userNum will be the number of quotes the user selects that they want to see
const fetchNumOfQuotes = (quotesArray) => {
  let pullQuotes = quotesArray.slice();
  let userNum = 3;
  let arrayForDisplay = [];
  while(userNum >= 3){
    let index = Math.floor(Math.random() * (pullQuotes.length - 1));
    arrayForDisplay.push(quotesArray.splice(index, 1));
    userNum--;
  }
  return arrayForDisplay;
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
