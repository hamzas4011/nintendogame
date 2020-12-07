import { ConsoleContext } from '../../contexts/ConsoleContext';
import { useContext } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const ConsoleItem = ( { id, name, year, price, image } ) => {

    const { console } = useContext( ConsoleContext );
    const [ consoleState, setConsole ] = console;

    const setSelectedConsole = () => {
        setConsole({id: id, name: name, year: year, price: price, image: image});
    }
    return (
        <Col>
            <Card className="text-center" border="primary" height="500">
                <Card.Title>{ name }</Card.Title>
                <Card.Subtitle>id: {id}</Card.Subtitle>
                <Card.Body>
                    <Card.Img src={`https://localhost:5001/images/${image}`} height="300"></Card.Img>
                    <Card.Text>År: { year }</Card.Text>
                    <Card.Text>Pris: { price }</Card.Text>
                </Card.Body>
                <Button onClick={ setSelectedConsole }>Oppdater konsoll</Button>
            </Card>
        </Col>
    )
}
export default ConsoleItem;
