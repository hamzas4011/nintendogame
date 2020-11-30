
import axios from 'axios';
import AllGamesAdminDelete from '../views/AllGamesAdminDelete';

const GameDelete = ( props ) => {

     const AllGamesAdminDelete = () => {
          const url = "https://localhost:5001/games";
        axios.delete(`${url}/${props.id}`);
     }

    return (
        <article>
            <h3>{ props.name }</h3>
            <input onClick={ AllGamesAdminDelete } type="button" value="Slett spill" />
        </article>
    )
}

export default GameDelete;