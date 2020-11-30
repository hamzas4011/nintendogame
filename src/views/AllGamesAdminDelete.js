import { useState, useEffect } from 'react';
import GameDelete from '../components/GameDelete';
import axios from 'axios';

const AllGamesAdminDelete = () => {

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
                { getGames() }
            </section>
        )
   
   
}

export default AllGamesAdminDelete;

