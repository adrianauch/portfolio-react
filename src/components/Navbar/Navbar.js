import React from "react";
// import { HashRouter as Router } from 'react-router-dom'

import {
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Work from "../work/work";
import AboutMe from "../about/about";
import Contact from "../contact/contact";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
           
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">Adrian Auchterlonie</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">About Me</Nav.Link>
                    <Nav.Link href="/works">Works</Nav.Link>
                    <Nav.Link href="/contactme">Contact Me</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route  exact path="/">
                  <AboutMe />
                </Route>
                <Route  exact path="/works">
                  <Work />
                </Route>
                <Route exact path="/contactme">
                  <Contact />
                </Route>
              </Switch>
            
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapNavbar;

// import React from "react";
// // Import React Router Link component for internal hyperlinks

// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";

// const NavBar = () => {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="/">Adrian Auchterlonie</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link to="/aboutme">About Me</Nav.Link>
//             <Nav.Link to="/work#">Projects</Nav.Link>
//             <Nav.Link to="/contact-me">Contact Me</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };
// export default NavBar;
