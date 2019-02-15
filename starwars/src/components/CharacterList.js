import React from 'react'
import Character from './Character';
import './StarWars.css';


const CharacterList = props =>{
    return(
        <div className="character-list">
        {props.starwarsChars.map(character =>(
            <Character characterArray ={character} />
        ))}
        </div>
    );
}

export default CharacterList;

