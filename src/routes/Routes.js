
import React  from 'react';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Bruker sidene det her
import AllCharacters from '../views/AllCharacters';
import AllConsoles from '../views/AllConsoles';
import AllGames from '../views/AllGames';
import Home from '../views/Home';

// Admin sidene blir henta her
import DeleteGame from '../views/DeleteGame';
import DeleteCharacter from '../views/DeleteCharacter';
import DeleteConsole from '../views/DeleteConsole';
import CreateGame from '../views/CreateGame';
import UpdateGame from '../views/UpdateGame';
import CreateCharacter from '../views/CreateCharacter';
import CreateConsole from '../views/CreateConsole';
import UpdateCharacter from '../views/UpdateCharacter';
import UpdateConsole from '../views/UpdateConsole';
  
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
             <NavDropdown.Item as={Link} to="/createconsole">Legg til spillkonsoll</NavDropdown.Item>
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
