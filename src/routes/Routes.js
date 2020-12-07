import React  from 'react';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Bruker sidene det her
import AllCharacters from '../views/character/AllCharacters';
import AllConsoles from '../views/console/AllConsoles';
import AllGames from '../views/game/AllGames';
import Home from '../views/Home';

// Admin sidene her
import DeleteGame from '../views/game/DeleteGame';
import CreateGame from '../views/game/CreateGame';
import UpdateGame from '../views/game/UpdateGame';

import DeleteCharacter from '../views/character/DeleteCharacter';
import CreateCharacter from '../views/character/CreateCharacter';
import UpdateCharacter from '../views/character/UpdateCharacter';

import DeleteConsole from '../views/console//DeleteConsole';
import CreateConsole from '../views/console/CreateConsole';
import UpdateConsole from '../views/console/UpdateConsole';
  
// Routes brukes for å navigere mellom sidene, linken
const Routes = () => {

  return (
      <BrowserRouter>
          <Navbar bg="danger" variant="dark" className="mb-5" expand={'lg'}>
            <Navbar.Brand>Nintendo gaming</Navbar.Brand>
            <Nav>
            <Nav.Link as={Link} to="/">Hjem</Nav.Link>
            <Nav.Link as={Link} to="/allgames">Alle spill</Nav.Link>
            <Nav.Link as={Link} to="/allcharacters">Alle spillfigurer</Nav.Link>
            <Nav.Link as={Link} to="/allconsoles">Alle nintendo konsoller</Nav.Link>
             
            <Nav className="mr-auto">
            <NavDropdown title="Admin spill">
            <NavDropdown.Item as={Link} to="/deletegame">Slett spill</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/creategame">Legg til spill</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/updategame">Endre spill</NavDropdown.Item>
            </NavDropdown>

            <Nav className="m1-auto">
             <NavDropdown title="Admin spillfigur">
             <NavDropdown.Item as={Link} to="/deletecharacter">Slett spillfigur</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/createcharacter">Legg til spillfigur</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/updatecharacter">Endre spillfigur</NavDropdown.Item>
             </NavDropdown>

            <Nav className="m2-auto2">
             <NavDropdown title="Admin konsoll">
             <NavDropdown.Item as={Link} to="/deleteconsole">Slett konsoll</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/createconsole">Legg til konsoll</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/updateconsole">Endre konsoll</NavDropdown.Item>
             </NavDropdown>
            </Nav>
            </Nav>
          </Nav>
          </Nav>
        </Navbar>  

<Container>
    <main>
  <Switch>
    <Route exact path="/" component={ Home }></Route>
    <Route path="/allgames" component={ AllGames }></Route>
    <Route path="/allcharacters" component={ AllCharacters }></Route>
    <Route path="/allconsoles" component={ AllConsoles }></Route>
    <Route path="/deletegame" component={ DeleteGame }></Route>
    <Route path="/deletecharacter" component={ DeleteCharacter }></Route>
    <Route path="/deleteconsole" component={ DeleteConsole }></Route>
    <Route path="/creategame" component={ CreateGame }></Route>
    <Route path="/updategame" component={ UpdateGame }></Route>
    <Route path="/createcharacter" component={ CreateCharacter }></Route>
    <Route path="/createconsole" component={ CreateConsole }></Route>
    <Route path="/updatecharacter" component={ UpdateCharacter }></Route>
    <Route path="/updateconsole" component={ UpdateConsole }></Route>
</Switch>
</main>
</Container>
</BrowserRouter>

  );
}
export default Routes;
