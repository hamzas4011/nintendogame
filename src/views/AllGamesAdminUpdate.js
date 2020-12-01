
import React from 'react';
import { GameProvider } from '../contexts/GameContext';
import GameUpdate from '../components/GameUpdate';
import Game from '../components/Game';


const AllGamesAdminUpdate = () => {

    return (
        <section>
            <h3>Rediger spillfigurer admin</h3>
            <GameProvider>
                <Game></Game>
                <GameUpdate></GameUpdate>
            </GameProvider>
            
        </section>
    )
}

export default AllGamesAdminUpdate;

