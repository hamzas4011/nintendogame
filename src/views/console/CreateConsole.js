import { useState } from 'react';
import axios from 'axios';
const CreateConsole = () => {

    const [ name, setName ] = useState("");
    const [ year, setYear ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ image, setImage ] = useState("")

    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "name":
                setName( e.target.value );
                break;
            case "year":
                setYear(parseInt(e.target.value) );
                break;
            case "price":
                setPrice(parseInt ( e.target.value ));
                break;
            case "image":
                setImage( e.target.value );
                break;
            default:
        }
    }

    const CreateConsole = () => {
        const url = "https://localhost:5001/consoles";
        const newConsole = { name: name, year: year, price: price, image: image };

        axios.post(url, newConsole)
    }

    return (
        <section>
            <h3>Skap ny konsoll</h3>
            <label>Navn</label>
            <input id="name" onChange={ handleChange } type="text" value={ name }/>
            <label>År</label>
            <input id="year" onChange={ handleChange } type="number" value={ year }/>
            <label>Pris</label>  
            <input id="price" onChange={ handleChange } type="number" value={ price }/>
            <label>Bilde</label>
            <input id="image" onChange={ handleChange } placeholder="Velg bilde fra API..." type="text" value={ image }/>
            <input onClick={ CreateConsole } type="button" value="Lagre ny konsoll"></input> 
        </section>
    )
}

export default CreateConsole;
