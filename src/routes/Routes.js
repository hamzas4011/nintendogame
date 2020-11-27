
import React, { useState } from 'react';
import { BrowserRouter as Router,Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Bruker sidene det her
import Home from '../views/Home';
import GameCharacters from '../views/GameCharacters';
import GameConsoles from '../views/GameConsoles';
import AllGames from '../views/AllGames';

// Admin sidene blir henta her
import AllGamesAdmin from '../views/AllGamesAdmin';
import GameCharactersAdmin from '../views/GameCharactersAdmin';
import GameConsolesAdmin from '../views/GameConsolesAdmin';
import AllGamesAdminUpdate from '../views/AllGamesAdminUpdate';
import AllGamesAdminDelete from '../views/AllGamesAdminDelete';
import AllGamesAdminAdd from '../views/AllGamesAdminAdd';

  
  
  
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
             

          
            <Navbar bg="danger" variant="dark" className="mr-auto">
            <Nav.Link as={Link} to="/allgamesadmin">Alle spill admin</Nav.Link>
            <Nav.Link as={Link} to="/gamecharactersadmin">Alle spillfigurer admin</Nav.Link>
            <Nav.Link as={Link} to="/gameconsolesadmin">Alle spill konsoler admin</Nav.Link>
            
            <Nav.Link as={Link} to="/allgamesadminupdate">Rediger alle spill</Nav.Link>
            <Nav.Link as={Link} to="/allgamesadmindelete">Slett alle spill</Nav.Link>
            <Nav.Link as={Link} to="/allgamesadminadd">Legg til alle spill</Nav.Link>
            
            </Navbar>

            
          </Nav>  

        </Navbar>

  

<Container>
    <main>
<Switch>
    <Route exact path="/" component={ Home }></Route>
    <Route path="/allgames" component={ AllGames }></Route>
    <Route path="/gamecharacters" component={ GameCharacters }></Route>
    <Route path="/gameconsoles" component={ GameConsoles }></Route>

     
    <Route path="/allgamesadmin" component={ AllGamesAdmin }></Route>
    <Route path="/gamecharactersadmin" component={ GameCharactersAdmin }></Route>
    <Route path="/gameconsolesadmin" component={ GameConsolesAdmin }></Route>

    <Route path="/allgamesadminupdate" component={ AllGamesAdminUpdate }></Route>
    <Route path="/allgamesadmindelete" component={ AllGamesAdminDelete }></Route>
    <Route path="/allgamesadminadd" component={ AllGamesAdminAdd }></Route>

    

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