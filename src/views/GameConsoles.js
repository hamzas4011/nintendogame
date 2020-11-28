import { useState, useEffect } from 'react';
import Console from '../components/Console';
import axios from 'axios';

const GameConsoles = () => {

    
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
                <h3>Alle Nitendo Consoles</h3>
                <p>Antall Games: { consoles.length }</p>  
                
                { getConsoles() }
            </section>
        )
   
   }
   
   export default GameConsoles;
   
   
   
   