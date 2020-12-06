import { useState } from 'react';
import axios from 'axios';

const CreateGame = () => {

    const [ name, setName ] = useState("");
    const [ category, setCategory ] = useState("A");
    const [ price, setPrice ] = useState("Z");
    const [ image, setImage ] = useState("...Velg bilde fra databasen")

    const [ gameState, setGame ] = useState("o")
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
            <input id="image" onChange={ handleChange }type="text" value={ image }/>
            <label>Image:</label>
            <img src={`https://localhost:5001/images/${gameState.image}`}/>
            <input onChange={(e)=>setGame( {...gameState, image: e.target.files[0].name})} 
                type="file"></input>
            <input type="button" value="Last opp bilde"></input>
            <input onClick={ CreateGame } type="button" value="Lagre nytt spill"></input> 
        </section>
    )
}

export default CreateGame;