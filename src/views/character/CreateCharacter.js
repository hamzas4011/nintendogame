import { useState } from 'react';
import axios from 'axios';
const CreateCharacter = () => {

    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState("");
    const [ weapon, setWeapon ] = useState("");
    const [ strength, setStrength ] = useState("");
    const [ image, setImage ] = useState("")

    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "name":
                setName( e.target.value );
                break;
            case "age":
                setAge(parseInt( e.target.value ));
                break;
            case "weapon":
                setWeapon( e.target.value );
                break;
            case "strength":
                setStrength( e.target.value );
                break;
            case "image":
                setImage( e.target.value );
                break;
            default:
        }
    }

    const CreateCharacter = () => {
        const url = "https://localhost:5001/characters";
        const newCharacter = { name: name, age: age, weapon: weapon, strength: strength, image: image };

        axios.post(url, newCharacter)
    }

    return (
        <section>
            <h3>Skap ny spillfigur</h3>
            <label>Navn</label>
            <input id="name" onChange={ handleChange } type="text" value={ name }/>
            <label>Alder</label>
            <input id="age" onChange={ handleChange } type="number" value={ age }/>
            <label>Våpen</label>  
            <input id="weapon" onChange={ handleChange } type="text" value={ weapon }/>
            <label>Styrke</label>  
            <input id="strength" onChange={ handleChange } type="text" value={ strength }/>
            <label>Bilde</label>
            <input id="image" onChange={ handleChange } placeholder="Velg bilde fra databasen..." type="text" value={ image }/>
            <input onClick={ CreateCharacter } type="button" value="Lagre ny spillfigur"></input> 
        </section>
    )
}

export default CreateCharacter;