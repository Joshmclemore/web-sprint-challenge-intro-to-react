// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin: 15px;
    border: 5px solid #89FC00;
    border-radius: 10%;
    padding: 10px;

    h2 {
        border-bottom: 2px solid red;
    }

    p {
        text-align: left;
    }
`

const Character = (props) => {
    return (
        <>
            {props.everyCharacter.map(character => {
                return (
                <StyledWrapper key={character.url} className="character-wrapper">
                    <h2>{character.name}</h2>
                    <h3>Link to Home World: {character.homeworld}</h3>
                    <p>Films: {character.films.join(', ')}</p>
                </StyledWrapper>
                )
            })}
         </> 
    )
}

export default Character;