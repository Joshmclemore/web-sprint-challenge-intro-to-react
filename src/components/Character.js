// Write your Character component here
import React from 'react';
import styled from 'styled-components';



const Character = (props) => {
    return (
        <>
            {props.everyCharacter.map(character => {
                return (
                <div key={character.url} className="character-wrapper">
                    <h2>{character.name}</h2>
                    <h3>Home World: {character.homeworld}</h3>
                    <p>Films: {character.films.join(', ')}</p>
                </div>
                )
            })}
         </> 
    )
}

export default Character;