import { GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const GameItem = ( { id, name, category, price, image } ) => {

    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const setSelectedGame = () => {
        setGame({id: id, name: name, category: category, price: price, image: image});
    }

    return (
        <Col>
            <Card>
                <Card.Title>{ name }</Card.Title>
                <Card.Body>
                    <Card.Text>Kategori: { category }</Card.Text>
                </Card.Body>
                <Button onClick={ setSelectedGame }>Oppdater spill</Button>
            </Card>
        </Col>
    )
}

export default GameItem;
