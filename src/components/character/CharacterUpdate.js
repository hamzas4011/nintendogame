import { CharacterContext } from '../../contexts/CharacterContext';
import { useContext } from 'react';
import axios from 'axios';

const CharacterUpdate = () => {

    const { character, characters } = useContext( CharacterContext);
    const [ characterState, setCharacter ] = character;
    const [ charactersState, setCharacters ] = characters;

    const updateCharacter = () => {
        if(characterState.id){
        const url = "https://localhost:5001/characters";
        axios.put(`${url}/${characterState.id}`, characterState)
        .then( response => {
            let indexOfCharacter = charactersState.findIndex( shO => shO.id = characterState.id);
            charactersState[indexOfCharacter] = characterState;
            setCharacters([...charactersState]);
        })
    }

}

    return (
        <section>
            <h3>Endre Spillfigur</h3>
            <p>Klikk først på Oppdater-knappen til et av komponentene under, deretter kan du endre på navnet på spillfiguret.</p>
            <label>Navn</label>
            <input 
            onChange={ (e) => setCharacter( {...characterState, name: e.target.value } ) } type="text" value={ characterState.name }></input>

            <label>Bilde</label>
            <input 
            onChange={ (e) => setCharacter( {...characterState, image: e.target.value } ) } type="text" value={ characterState.image }></input>

            <label>Alder</label>
            <input 
            onChange={ (e) => setCharacter( {...characterState, age: e.target.value } ) } type="number" value={ characterState.age }></input>

           <label>Våpen</label>
            <input 
            onChange={ (e) => setCharacter( {...characterState, weapon: e.target.value } ) } type="text" value={ characterState.weapon }></input>

             <label>Strength</label>
            <input 
            onChange={ (e) => setCharacter( {...characterState, strength: e.target.value } ) } type="text" value={ characterState.strength }></input>

             <input onClick={ updateCharacter } type="button" value="Endre"></input>

        </section>
    )
}

export default CharacterUpdate;