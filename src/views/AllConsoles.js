import { useState, useEffect } from 'react';
import Console from '../components/console/Console';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const AllConsoles = () => {

    
    const [ consoles, setConsoles ] = useState( 
        [ { id: "22", name: "ss", year: "2008", price:"33", image: "mummy.png"} ] 
        
    );
    const [ filter, setSearch] = useState("");
    
         useEffect( () => {
             const url = "https://localhost:5001/consoles";
              axios.get( url )
                  .then( response => { 
                      setConsoles( response.data  );
                  })
       }, [])
   
    const getConsoles = () => {
          return consoles.filter(obj => obj.name.includes(filter)).map((console, i) => {
              return <Console key={ i } { ...console }></Console>
          });
    }
    const searchConsoles = (e) =>{
        setSearch(e.target.value);
    }
    
        return (
            <section>
                <h3>Alle Nintendo konsoller</h3>
                <label>Søk</label>
                    <input onChange={searchConsoles} placeholder="Søk navn på konsoll..." type="text"></input>
                <p>Antall konsoller: { consoles.length }</p>  
                <Row xs={3}>
                { getConsoles() }
                </Row>
            </section>
        )
   
   }
   
   export default AllConsoles;
   
   
   
   