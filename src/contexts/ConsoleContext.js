import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const ConsoleContext = createContext();
export const ConsoleProvider = ( props ) => {

    const [ console, setConsole ] = useState( {id: "dummyId", name: "DummyNintendo", year: "20", price: "dummyWeapon"})

    const [ consoles, setConsoles ] = useState([
        { id: "78787878", name: "nite", year: "20", price:"140"},
        { id: "87878787", name: "Cargo", year: "22", price:"190"}
    ]);
    useEffect( () => {
        const url = "https://localhost:5001/consoles";
        axios.get( url )
             .then( response => {
                 setConsoles( response.data );
             } )
    }, [])
    return(
        <ConsoleContext.Provider value={ { consoles: [ consoles, setConsoles], console: [console, setConsole] } }>
            { props.children }
        </ConsoleContext.Provider>
    )
}
