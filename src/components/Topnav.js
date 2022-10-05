import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import {Navbar , Container, Nav,NavLink, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";




function Topnav(){
  const userDetails= JSON.parse(localStorage.getItem('user'))
  
  const navigate = useNavigate(); 

 const handleLogout = () =>{
 localStorage.clear();
 navigate(`/Login`)

 }

return(
<>
<Navbar bg="dark"  variant="dark" expand="lg" fixed="top" 
className = "text-uppercase h5">
  <Container>
  <Navbar.Toggle aria-controls="basic-navbar-nav "/>
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav>
  <NavLink as={Link} to = {`/Home`} className ="text-decoration-none mx-2">Home</NavLink>
  <NavLink  as={Link} to = {`/Accommodation`}> Accommodation </NavLink>
	<NavLink  as={Link} to = {`/Contactus`}> Contact Us </NavLink>


  { userDetails
  ? 
<NavDropdown title = {userDetails && userDetails.first_Name}> 

<NavDropdown.Item as={Link}   to={`/Profile`}> Profile</NavDropdown.Item>

<NavDropdown.Item onClick = {handleLogout}> Logout</NavDropdown.Item>
  </NavDropdown>
   :
   <NavLink as={Link}  to = {`/Login`}> Login</NavLink> }
}

	  </Nav>
	  </Navbar.Collapse>
	  </Container>
	  </Navbar>
	 
</>
)
}

export default Topnav;



