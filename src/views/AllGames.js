import { useState, useEffect } from 'react';
import Game from '../components/game/Game';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const AllGames = () => {

 const [ games, setGames ] = useState(
     [ { id: "22", name: "ss", age: "55", category: "philip", price:"33", image: "mummy.png"} ] 
 );

 
      useEffect( () => {
          const url = "https://localhost:5001/games";
           axios.get( url )
               .then( response => { 
                   setGames( response.data  );
               })
    }, [])
 const getGames = () => {
       return games.map( ( game, i ) => {
           return <Game key={ i } { ...game }></Game>
       });
 }
 
     return (
         <section>
             <h3>Alle Nintendo Spill</h3>
             <p>Antall Spill: { games.length }</p>  
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