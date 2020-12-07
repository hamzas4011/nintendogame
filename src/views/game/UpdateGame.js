import { GameProvider } from '../../contexts/GameContext';
import GameUpdate from '../../components/game/GameUpdate';
import GameList from '../../components/game/GameList';

const UpdateGame = () => {
    return (
        <section>
            <GameProvider>
                <GameUpdate></GameUpdate>
                <GameList></GameList>
            </GameProvider>
        </section>
    )
}
export default UpdateGame;

