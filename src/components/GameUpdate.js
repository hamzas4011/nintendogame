import { GameContext } from '../contexts/GameContext';
import { useContext } from 'react';
import axios from 'axios';
const GameUpdate = () => {

    const { game } = useContext( GameContext);
    const [ gameState, setGame ] = game;

    const updateGame = () => {
        const url = "https://localhost:5001/games";
        axios.put(`${url}/${gameState.id}`, gameState)
    }

    return (
        <section>
            <h3>Endre Spill</h3>
            <label>Navn</label>
            <input onChange={ (e) => setGame( {...gameState, name: e.target.value } ) } type="text" value={ gameState.name }></input>
            <input onClick={ updateGame } type="button" value="Endre"></input>
        </section>
    )
}

export default GameUpdate;