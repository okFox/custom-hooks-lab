import React, { useState } from 'react';
import characterList from '../services/characterList.json';
import Character from './Character';


export const Characters = () => {

  // const [characterList, setCharacterList] = useState({
  //   name:'',
  //   img:''
  // });
    
  const characterRadios = characterList.characters.map((character, i) => (
    <Character key={i} name={character.name} img={character.img} />
  ));

  return (
    <>
      <section>

        {characterRadios}

      </section>
    </>
      
  );
};



export default Characters;

