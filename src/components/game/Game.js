import { Col, Card } from 'react-bootstrap';

// Henter ut verdiene og bruker bootstrap card for design
const Game = ( { id, name, category, price, image}) => {
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
            </Card>
        </Col>
    )
}
export default Game;

