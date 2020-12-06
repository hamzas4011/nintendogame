import { useState, useEffect } from 'react';
import CharacterDelete from '../components/character/CharacterDelete';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const DeleteCharacter = () => {

    const [ characters, setCharacters ] = useState( 
        [ { id: "22", name: "ss", age: "55", weapon: "philip", strength:"power", image: "mummy.png"} ] 
    );
         useEffect( () => {
             const url = "https://localhost:5001/characters";
              axios.get( url )
                  .then( response => { 
                      setCharacters( response.data  );
                  })
       }, [])
   
    const getcharacters = () => {
          return characters.map( ( character, i ) => {
              return <CharacterDelete 
              key={ i }
              id={ character.id }
              name= { character.name }>
              </CharacterDelete>
          });
    }
    
        return (
            <section>
                <h3>Slett spillfigur</h3>
                <p>Antall Spillfigur: { characters.length }</p>  
                <Row xs={2}>
                { getcharacters() }
                </Row>
            </section>
        )
   
}

export default DeleteCharacter;

