import React from 'react';
import {Navbar , Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Topnav(){
return(
<>
<Navbar bg="dark"  variant="dark" expand="lg" fixed="top" 
className = "text-uppercase h5">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav "/>
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav>
        <Nav.Link> 
        <Link to = {'/Home'} className ="text-decoration-none">Home</Link>
        </Nav.Link>

        <Nav.Link>
        <Link to = {'/Accommodation'} className ="text-decoration-none"> Accommodation </Link>
        </Nav.Link>

		<Nav.Link>
		<Link to = {'/Reservation'} className ="text-decoration-none"> Reservation</Link>
		</Nav.Link>

		<Nav.Link>
		<Link to = {'/Contactus'} className ="text-decoration-none"> Contact Us </Link>
		</Nav.Link>

	  </Nav>
	  </Navbar.Collapse>
	  </Container>
	  </Navbar>
	 
</>
)
}

export default Topnav;



