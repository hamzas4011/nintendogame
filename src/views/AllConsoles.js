import { useState, useEffect } from 'react';
import Console from '../components/console/Console';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const AllConsoles = () => {

    
    const [ consoles, setConsoles ] = useState( 
        [ { id: "22", name: "ss", year: "2008", price:"33", image: "mummy.png"} ] 
    );
    
         useEffect( () => {
             const url = "https://localhost:5001/consoles";
              axios.get( url )
                  .then( response => { 
                      setConsoles( response.data  );
                  })
       }, [])
   
    const getConsoles = () => {
          return consoles.map( ( console, i ) => {
              return <Console key={ i } { ...console }></Console>
          });
    }
    
        return (
            <section>
                <h3>Alle Nintendo konsoller</h3>
                <p>Antall konsoller: { consoles.length }</p>  
                <Row xs={3}>
                { getConsoles() }
                </Row>
            </section>
        )
   
   }
   
   export default AllConsoles;
   
   
   
   