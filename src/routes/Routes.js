
import React, { useState } from 'react';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Bruker sidene det her
import GameCharacters from '../views/GameCharacters';
import GameConsoles from '../views/GameConsoles';
import AllGames from '../views/AllGames';
import Home from '../views/Home';

// Admin sidene blir henta her
import AllGamesAdminDelete from '../views/AllGamesAdminDelete';
import AllGamesAdminAdd from '../views/AllGamesAdminAdd';

import Games from '../views/Games';
  
const Routes = () => {

  return (
      <BrowserRouter>

        <Navbar bg="danger" variant="dark" className="mb-5">
          <Navbar.Brand>Nintendo gaming</Navbar.Brand>
          
          <Nav>
            <Nav.Link as={Link} to="/">Hjem</Nav.Link>
            <Nav.Link as={Link} to="/allgames">Alle spill</Nav.Link>
            <Nav.Link as={Link} to="/gamecharacters">Alle spillfigurer</Nav.Link>
            <Nav.Link as={Link} to="/gameconsoles">Alle nintendo konsoller</Nav.Link>
             
          
            <Nav className="mr-auto">
            <NavDropdown title="Admin">
            <NavDropdown.Item as={Link} to="/allgamesadmindelete">Slett spill</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/allgamesadminadd">Legg til spill</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gameupdate">Endre spill</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Nav>
        </Navbar>
<Container>
    <main>
<Switch>
    <Route exact path="/" component={ Home }></Route>
    <Route path="/allgames" component={ AllGames }></Route>
    <Route path="/gamecharacters" component={ GameCharacters }></Route>
    <Route path="/gameconsoles" component={ GameConsoles }></Route>
    <Route path="/allgamesadmindelete" component={ AllGamesAdminDelete }></Route>
    <Route path="/allgamesadminadd" component={ AllGamesAdminAdd }></Route>
    <Route path="/gameupdate" component={ Games }></Route>
</Switch>
</main>
</Container>

</BrowserRouter>

  );
}

export default Routes;



/*
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Games from '../views/Games';
import { Nav } from 'react-bootstrap';
import GameCharacters from '../views/GameCharacters';

import GameConsoles from '../views/GameConsoles';

import Home from '../views/Home';



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

*/