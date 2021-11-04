import React from 'react';
import './Pokecard.css';


/**Shows single Pokemon w/ name, image, type */
const Pokecard = ({name, type, id, base_experience}) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <span className="Pokecard">
            <div className="Pokecard-name">{name}</div>
            <img className="Pokecard-img" src={imgUrl} alt="Pokemon Missing"></img>
            <div className="Pokecard-type">Type: {type}</div>
            <div className="Pokecard-exp">EXP: {base_experience}</div>
        </span>
    )
}

export default Pokecard;