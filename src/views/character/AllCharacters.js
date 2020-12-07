import { useState, useEffect } from 'react';
import Character from '../../components/character/Character';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const AllCharacters = () => {

    const [ characters, setCharacters ] = useState( 
        [ { id: "22", name: "ss", age: "2008", weapon:"33", strength: "jump", image: "mummy.png"} ] 
    );
    const [ filter, setSearch] = useState("");
    
         useEffect( () => {
             const url = "https://localhost:5001/characters";
              axios.get( url )
                  .then( response => { 
                      setCharacters( response.data  );
                  })
       }, [])
   
    const getCharacters = () => {
        return characters.filter(obj => obj.name.includes(filter)).map((character, i) => {
              return <Character key={ i } { ...character }></Character>
          });
    }
    
    const searchCharacters = (e) =>{
        setSearch(e.target.value);
    }
        return (
            <section>
                <h3>Alle Nintendo Spillfigurer</h3>
                <p>Antall Spillfigurer: { characters.length }</p>   
                <label>Søk</label>
                <input onChange={searchCharacters} placeholder="Søk navn på spillfigur..." type="text"></input>
                <Row xs={3}>
                   { getCharacters() }
                </Row> 
            </section>
        )
   }
   
   export default AllCharacters;
   
   
   
   