import { useState, useEffect } from 'react';
import ConsoleDelete from '../../components/console/ConsoleDelete';
import axios from 'axios';
import { Row } from 'react-bootstrap';
const DeleteConsole = () => {

    const [ consoles, setConsoles ] = useState( 
        [ { id: "22", name: "ss", year: "55", price: "299", image: "mummy.png"} ] 
    );
         useEffect( () => {
             const url = "https://localhost:5001/consoles";
              axios.get( url )
                  .then( response => { 
                      setConsoles( response.data  );
                  })
       }, [])
    const getconsoles = () => {
          return consoles.map( ( console, i ) => {
              return <ConsoleDelete 
              key={ i }
              id={ console.id }
              name= { console.name }>
              </ConsoleDelete>
          });
    }
        return (
            <section>
                <h3>Slett Konsoll</h3>
                <p>Antall Konsoll: { consoles.length }</p>  
                <Row xs={2}>
                { getconsoles() }
                </Row>
            </section>
        )
}

export default DeleteConsole;

