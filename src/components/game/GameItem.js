import { GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

// Alle spill item og bootstrap card
const GameItem = ( { id, name, category, price, image } ) => {

    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const setSelectedGame = () => {
        setGame({id: id, name: name, category: category, price: price, image: image});
    }

    return (
        <Col>
            <Card className="text-center" border="primary" height="500">
                <Card.Title>{ name }</Card.Title>
                <Card.Subtitle>id: {id}</Card.Subtitle>
                <Card.Body>
                    <Card.Img src={`https://localhost:5001/images/${image}`} height="300"></Card.Img>
                    <Card.Text>Kategori: { category }</Card.Text>
                    <Card.Text>Pris: { price }</Card.Text>
                </Card.Body>
                <Button onClick={ setSelectedGame }>Oppdater spill</Button>
            </Card>
        </Col>
    )
}

export default GameItem;
