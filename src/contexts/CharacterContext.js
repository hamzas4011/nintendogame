import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const CharacterContext = createContext();
export const CharacterProvider = ( props ) => {

    const [ character, setCharacter ] = useState( {id: "", name: "", image:"",  age: "", weapon: "", strength: ""})

    const [ characters, setCharacters ] = useState([
        { id: "78787878", name: "nite", age: "20", weapon: "weapon", strength: "strength"},
        { id: "87878787", name: "Cargo", age: "22", weapon: "weapon1", strength: "strength1"}

    ]);
    useEffect( () => {
        const url = "https://localhost:5001/characters";
        axios.get( url )
             .then( response => {
                 setCharacters( response.data );
             } )
    }, [])
    return(
        <CharacterContext.Provider value={ { characters: [ characters, setCharacters], character: [character, setCharacter] } }>
            { props.children }
        </CharacterContext.Provider>
    )
}
