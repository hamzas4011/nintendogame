import axios from 'axios';
import DeleteCharacter from '../../views/DeleteCharacter';
import { Col, Card, Button } from 'react-bootstrap';


const CharacterDelete = ( props ) => {

     const DeleteCharacter = () => {
          const url = "https://localhost:5001/characters";
        axios.delete(`${url}/${props.id}`);
     }

    return (
        <Col>
             <Card>
            <h3>{ props.name }</h3>
            <Button onClick={ DeleteCharacter }>Slett spillfigur</Button>
             </Card> 
         </Col>
         
    )
}

export default CharacterDelete;
    