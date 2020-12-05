import { Row, Col } from 'react-bootstrap';
import { useContext, useState} from 'react';
import { GameContext } from '../../contexts/GameContext';
import GameItem from './GameItem';

const GameList = () => {

    const { games } = useContext( GameContext );
    const [ gamesState ] = games;
    const [ filter, setSearch] = useState("");
  
    const generateGames = () =>{

    return gamesState.filter(obj => obj.name.includes(filter)).map((games, i) => {
    
        return <GameItem key={i} {...games}></GameItem>
        }
    )
}
        const searchGames = (e) =>{
            setSearch(e.target.value);
        }

        return (
            <section>
                <Row>
                    <Col>
                    <label>Søk</label>
                    <input onChange={searchGames} placeholder="Søk navn på spill..." type="text"></input>
                    </Col>
                </Row>

                <Row xl={ 3 }>
                    {generateGames()}
                </Row>
            </section>
        )
}

export default GameList;