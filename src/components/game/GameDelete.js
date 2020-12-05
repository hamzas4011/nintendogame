import axios from 'axios';
import DeleteGames from '../../views/DeleteGames';

const GameDelete = ( props ) => {

     const DeleteGames = () => {
          const url = "https://localhost:5001/games";
        axios.delete(`${url}/${props.id}`);
     }

    return (
        <article>
            <h3>{ props.name }</h3>
            <input onClick={ DeleteGames } type="button" value="Slett spill" />
        </article>
    )
}

export default GameDelete;