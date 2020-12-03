
import { GameProvider } from '../contexts/GameContext';
import GameUpdate from '../components/game/GameUpdate';
import GameList from '../components/game/GameList';


const Games = () => {

    return (
        <section>
            <h3>Rediger spillfigurer admin</h3>
            <GameProvider>
                <GameUpdate></GameUpdate>
                <GameList></GameList>
            </GameProvider>
            
        </section>
    )
}

export default Games;

