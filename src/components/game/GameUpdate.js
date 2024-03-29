import { GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';
import axios from 'axios';

// Eksporterer til UpdateGame og gjør det mulig å endre spill

const GameUpdate = () => {

    const { game, games } = useContext( GameContext);
    const [ gameState, setGame ] = game;
    const [ gamesState, setGames ] = games;

    const updateGame = () => {
        if(gameState.id){
        const url = "https://localhost:5001/games";
        axios.put(`${url}/${gameState.id}`, gameState)
        .then( response => {
        let indexOfGame = gamesState.findIndex( shO => shO.id = gameState.id);
        gamesState[indexOfGame] = gameState;
            setGames([...gamesState]);
        })
    }

}

    return (
        <section>
            <h3>Endre Spill</h3>
            <p>Klikk først på Oppdater-knappen til et av komponentene under, deretter kan du endre på navnet på spillet.</p>
            <label>Navn</label>
            <input 
            onChange={(e) => setGame( {...gameState, name: e.target.value } ) } type="text" value={ gameState.name }></input>

            <label>Bilde</label>
            <input 
            onChange={ (e) => setGame( {...gameState, image: e.target.value } ) } type="text" value={ gameState.image }></input>

            <label>kategori</label>
            <input 
            onChange={ (e) => setGame( {...gameState, category :(e.target.value) } ) } type="text" value={ gameState.category }></input>

           <label>Pris</label>
            <input 
            onChange={ (e) => setGame( {...gameState, price : parseInt(e.target.value) } ) } type="number" value={ gameState.price }></input>
            <input onClick={ updateGame } type="button" value="Endre"></input>
        </section>
    )
}

export default GameUpdate;