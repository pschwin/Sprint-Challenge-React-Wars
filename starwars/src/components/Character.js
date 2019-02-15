import React from 'react';
import './StarWars.css';


const Character = props =>{
    return (
        <div className="one-character">
        <h2>Character:</h2>
        <h3><strong>Name: </strong>{props.characterArray.name}</h3>
        <h3><strong>Height: </strong>{props.characterArray.height}</h3>
        <h3><strong>Gender: </strong>{props.characterArray.gender}</h3>
       

        </div>
    );
}

export default Character;