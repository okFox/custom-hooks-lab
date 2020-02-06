export const getQuotesByCharacter = characterName => {
  return fetch(`https://cors-anywhere.herokuapp.com/futuramaapi.herokuapp.com/api/characters/${characterName}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(characters => characters.map(character => {
      return { 
        quote: character.quote
      };
    }));};
