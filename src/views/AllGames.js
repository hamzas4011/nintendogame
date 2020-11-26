import { useState, useEffect } from 'react';
import Game from '../components/Game';
import axios from 'axios';

const AllGames = () => {

    
 const [ games, setGames ] = useState( 
     [ { id: "", name: "", age: "", image: ""} ] 
 );
 
 
      useEffect( () => {
          const url = "https://localhost:5001/games";
           axios.get(  url )
               .then( response => { 
                   setGames( response.data  );
               })
    }, [] )



 const getGames = () => {
       return games.map( ( game, i ) => {
           return <Game key={ i } { ...game }></Game>
       });
 }
 
     return (
         <section>
             <h3>Alle monstre</h3>
             { getGames() }
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