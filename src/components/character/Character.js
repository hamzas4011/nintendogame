import { Col, Card } from 'react-bootstrap';

const Character = ( { id, name, age, weapon, strength, image}) => {
    return (
       
        <Col>
        <Card className="text-center" border="primary" height="500">
           <Card.Title>{name}</Card.Title>
           <Card.Subtitle>id: {id}</Card.Subtitle>
           <Card.Body>
           <Card.Img src={`https://localhost:5001/images/${image}`} height="300"></Card.Img>
           <Card.Text>Alder: { age }</Card.Text>
           <Card.Text>Våpen: { weapon }</Card.Text>
           <Card.Text>Styrke: { strength }</Card.Text>
           </Card.Body>
        </Card>
        </Col>
    )
}

export default Character;