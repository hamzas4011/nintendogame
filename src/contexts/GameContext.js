import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

/*
  Context filen deler informasjon med hvilken som helst komponents ved å lagre
  den et sted og deretter gi tilgang til alle komponenter som ber om det.
  Til vanlig kan man overføre kun data fra parent til child props.
*/

export const GameContext = createContext();

export const GameProvider = ( props ) => {

    const [ game, setGame ] = useState( {id: "", name: "", image:"",  category: "", price: ""})

    const [ games, setGames ] = useState([
        { id: "78787878", name: "nite", category: "elfa", price: "30"},
        { id: "87878787", name: "Cargo", category: "Cargo", price: "50"}

    ]);

    useEffect( () => {
        const url = "https://localhost:5001/games";
        axios.get( url )
             .then( response => {
                 setGames( response.data );
             } )
    }, [])

    return(
        <GameContext.Provider value={ { games: [ games, setGames], game: [game, setGame] } }>
            { props.children }
        </GameContext.Provider>
    )
}
