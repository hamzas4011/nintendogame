import { useState, useEffect } from 'react';
import Character from '../components/character/Character';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const AllCharacters = () => {

    const [ characters, setCharacters ] = useState( 
        [ { id: "22", name: "ss", age: "2008", weapon:"33", strength: "jump", image: "mummy.png"} ] 
    );
    
         useEffect( () => {
             const url = "https://localhost:5001/characters";
              axios.get( url )
                  .then( response => { 
                      setCharacters( response.data  );
                  })
       }, [])
   
    const getCharacters = () => {
          return characters.map( ( character, i ) => {
              return <Character key={ i } { ...character }></Character>
          });
    }
    
        return (
            <section>
                <h3>Alle Nintendo Spillfigurer</h3>
                <p>Antall Spillfigurer: { characters.length }</p>   
                <Row xs={3}>
                { getCharacters() }
                </Row> 
            </section>
        )
   
   }
   
   export default AllCharacters;
   
   
   
   