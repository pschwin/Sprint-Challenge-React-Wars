import React from 'react'
import Character from './Character';


const CharacterList = props =>{
    return(
        <div className="character-list">
        <h1>Test</h1>
        {props.starwarsChars.map(character =>(
            <Character characterArray ={character} />
        ))}
        </div>
    );
}

export default CharacterList;

