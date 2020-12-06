import axios from 'axios';
import DeleteConsole from '../../views/DeleteConsole';
import { Col, Card, Button } from 'react-bootstrap';


const ConsoleDelete = ( props ) => {

     const DeleteConsole = () => {
          const url = "https://localhost:5001/consoles";
        axios.delete(`${url}/${props.id}`);
     }

    return (
        <Col>
             <Card>
            <h3>{ props.name }</h3>
            <Button onClick={ DeleteConsole }>Slett konsoll</Button>
             </Card> 
         </Col>
         
    )
}

export default ConsoleDelete;
    