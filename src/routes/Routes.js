
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Games from '../views/Games';
import Characters from '../views/GameCharacters';
import { Nav } from 'react-bootstrap';
import GameCharacters from '../views/GameCharacters';


const Routes = () => {
    return (
        <BrowserRouter>
            <ul>
              <li><Link to="/">Alle spill</Link></li>
              <li><Link to="/characters">Alle spillfigurer</Link></li>
            </ul>


           <Switch>
               <Route exact path="/" component={ Games }></Route>
               <Route path="/characters" component={ GameCharacters }></Route>
           </Switch>
        </BrowserRouter>

    )
}

export default Routes;