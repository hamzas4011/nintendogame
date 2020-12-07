import { ConsoleContext } from '../../contexts/ConsoleContext';
import { useContext } from 'react';
import axios from 'axios';

const ConsoleUpdate = () => {

    const { console, consoles } = useContext( ConsoleContext);
    const [ consoleState, setConsole ] = console;
    const [ consolesState, setConsoles ] = consoles;

    const updateConsole = () => {
        if(consoleState.id){
        const url = "https://localhost:5001/consoles";
        axios.put(`${url}/${consoleState.id}`, consoleState)
        .then( response => {
        let indexOfCharacter = consolesState.findIndex( shO => shO.id = consoleState.id);
        consolesState[indexOfCharacter] = consoleState;
        setConsoles([...consolesState]);
        })
    }

}

    return (
        <section>
            <h3>Endre Konsoll</h3>
            <p>Klikk først på Oppdater-knappen til et av komponentene under, deretter kan du endre på konsoll.</p>
            <label>Navn</label>
            <input 
            onChange={(e) => setConsole( {...consoleState, name: e.target.value } ) } type="text" value={ consoleState.name }></input>

            <label>Bilde</label>
            <input 
            onChange={ (e) => setConsole( {...consoleState, image: e.target.value } ) } type="text" value={ consoleState.image }></input>

            <label>År</label>
            <input 
            onChange={ (e) => setConsole( {...consoleState, year: parseInt(e.target.value) } ) } type="number" value={ consoleState.year }></input>

           <label>Pris</label>
            <input 
            onChange={ (e) => setConsole( {...consoleState, price: parseInt (e.target.value) } ) } type="number" value={ consoleState.price }></input>
             <input onClick={ updateConsole } type="button" value="Endre"></input>
        </section>
    )
}
export default ConsoleUpdate;