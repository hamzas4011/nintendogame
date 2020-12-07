import axios from 'axios';
import { Col, Card, Button } from 'react-bootstrap';

// Eksporterer til DeleteGame og lager funksjon for å slette spill
const GameDelete = ( props ) => {
     const DeleteGame = () => {
          const url = "https://localhost:5001/games";
        axios.delete(`${url}/${props.id}`);
     }

    return (
        <Col>
             <Card>
               <h3>{ props.name }</h3>
               <Button onClick={ DeleteGame }>Slett spill</Button>
             </Card> 
         </Col>   
    )
}

export default GameDelete;