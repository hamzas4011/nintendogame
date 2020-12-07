import { useState, useEffect } from 'react';
import GameDelete from '../../components/game/GameDelete';
import axios from 'axios';
import { Row } from 'react-bootstrap';

  /*
  Brukes for å slette spill. Koblet til games databasen slik 
  man kan hente det og slette det.
  */

const DeleteGame = () => {

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
              return <GameDelete 
              key={ i }
              id={ game.id }
              name= { game.name }>
              </GameDelete>
          });
    }
    
        return (
            <section>
                <h3>Slett spill</h3>
                <p>Antall Spill: { games.length }</p>  
                <Row xs={2}>
                { getGames() }
                </Row>
            </section>
        )
   
}

export default DeleteGame;

