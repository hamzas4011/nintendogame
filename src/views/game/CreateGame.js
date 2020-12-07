import { useState } from 'react';
import axios from 'axios';

    // Legge til ny spill i games databasen

const CreateGame = () => {

    const [ name, setName ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ image, setImage ] = useState("")

    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "name":
                setName( e.target.value );
                break;
            case "category":
                setCategory( e.target.value );
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

    const CreateGame = () => {
        const url = "https://localhost:5001/games";
        const newGame = { name: name, category: category, price: price, image: image };

        axios.post(url, newGame)
    }

    return (
        <section>
            <h3>Skap nytt Spill</h3>
            <label>Navn</label>
            <input id="name" onChange={ handleChange } type="text" value={ name }/>
            <label>Kategori</label>
            <input id="category" onChange={ handleChange } type="text" value={ category }/>
            <label>Pris</label>  
            <input id="price" onChange={ handleChange } type="number" value={ price }/>
            <label>Bilde</label>
            <input id="image" onChange={ handleChange } placeholder="Velg bilde fra API..." type="text" value={ image }/>
            <input onClick={ CreateGame } type="button" value="Lagre nytt spill"></input> 
        </section>
    )
}

export default CreateGame;