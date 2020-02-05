import React, { useState } from 'react';
import characterList from '../services/characterList.json';
import Character from './Character';
import PropTypes from 'prop-types';


export const Characters = ({ onChange }) => {

  // const [characterList, setCharacterList] = useState({
  //   name:'',
  //   img:''
  // });
    
  const characterRadios = characterList.characters.map((character, i) => (
    <Character key={i} name={character.name} img={character.img} onChange={onChange} />
  ));

  return (
    <>
      <section>

        {characterRadios}

      </section>
    </>
      
  );
};
Characters.propTypes = {
  onChange: PropTypes.func.isRequired
};


export default Characters;

