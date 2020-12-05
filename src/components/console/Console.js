import { Col, Card } from 'react-bootstrap';

const Console = ( { id, name, year, price, image}) => {
    return (
        <Col>
             <Card border="primary" height="500">
                <Card.Title>{ name }</Card.Title>
                <Card.Subtitle> Id: {id}</Card.Subtitle>
                <Card.Body>
                <Card.Img src={`https://localhost:5001/images/${image}`} height="300"></Card.Img>
                <Card.Text>År: { year }</Card.Text>
                <Card.Text>Pris: { price }</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}



export default Console;