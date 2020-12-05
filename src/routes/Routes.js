
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
import DeleteGames from '../views/DeleteGames';
import CreateGame from '../views/CreateGame';
import UpdateGame from '../views/UpdateGame';
  
const Routes = () => {

  return (
      <BrowserRouter>

        <Navbar bg="danger" variant="dark" className="mb-5">
          <Navbar.Brand>Nintendo gaming</Navbar.Brand>
          
          <Nav>
            <Nav.Link as={Link} to="/">Hjem</Nav.Link>
            <Nav.Link as={Link} to="/allgames">Alle spill</Nav.Link>
            <Nav.Link as={Link} to="/allcharacters">Alle spillfigurer</Nav.Link>
            <Nav.Link as={Link} to="/allconsoles">Alle nintendo konsoller</Nav.Link>
             
          
            <Nav className="mr-auto">
            <NavDropdown title="Admin">
            <NavDropdown.Item as={Link} to="/deletegames">Slett spill</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/creategame">Legg til spill</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/updategame">Endre spill</NavDropdown.Item>
            </NavDropdown>
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
    <Route path="/deletegames" component={ DeleteGames }></Route>
    <Route path="/creategame" component={ CreateGame }></Route>
    <Route path="/updategame" component={ UpdateGame }></Route>
</Switch>
</main>
</Container>
</BrowserRouter>

  );
}
export default Routes;
