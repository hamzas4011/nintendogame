import { CharacterContext } from '../../contexts/CharacterContext';
import { useContext } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const CharacterItem = ( { id, name, age, weapon, strength, image } ) => {

    const { character } = useContext( CharacterContext );
    const [ characterState, setCharacter ] = character;

    const setSelectedCharacter = () => {
        setCharacter({id: id, name: name, age: age, weapon: weapon, strength: strength, image: image});
    }

    return (
        <Col>
            <Card className="text-center" border="primary" height="500">
                <Card.Title>{ name }</Card.Title>
                <Card.Subtitle>id: {id}</Card.Subtitle>
                <Card.Body>
                    <Card.Img src={`https://localhost:5001/images/${image}`} height="300"></Card.Img>
                    <Card.Text>Alder: { age }</Card.Text>
                    <Card.Text>Våpen: { weapon }</Card.Text>
                    <Card.Text>Styrke: { strength }</Card.Text>
                </Card.Body>
                <Button onClick={ setSelectedCharacter }>Oppdater spillfigur</Button>
            </Card>
        </Col>
    )
}
export default CharacterItem;
