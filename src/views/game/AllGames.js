import { useState, useEffect } from 'react';
import Game from '../../components/game/Game';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const AllGames = () => {

 const [ games, setGames ] = useState(
     [ { id: "22", name: "ss", age: "55", category: "philip", price:"33", image: "mummy.png"} ] 
 );
 const [ filter, setSearch] = useState("");
 
      useEffect( () => {
          const url = "https://localhost:5001/games";
           axios.get( url )
               .then( response => { 
                   setGames( response.data  );
               })
    }, [])
 const getGames = () => {
    return games.filter(obj => obj.name.includes(filter)).map((game, i) => {
           return <Game key={ i } { ...game }></Game>
       });
 }
 const searchGames = (e) =>{
    setSearch(e.target.value);
}

     return (
         <section>
             <h3>Alle Nintendo Spill</h3>
             <p>Antall Spill: { games.length }</p>  
             <label>Søk</label>
             <input onChange={searchGames} placeholder="Søk navn på spill..." type="text"></input>
             <Row xs={3} >
            {getGames()}
            </Row>
         </section>
     )
}

export default AllGames;

















/*
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';

import Games from '../components/Games';


const AllGames = () => {

    return (
        <section>
            <h3>All games</h3>
            
        </section>
    )
}

export default AllGames;

*/