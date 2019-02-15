import React from 'react';


const Character = props =>{
    return (
        <div className="one-character">

        <h3>{props.characterArray.name}</h3>

        </div>
    );
}

export default Character;