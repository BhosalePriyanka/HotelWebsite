import React from 'react';
import room from "../Image/room.jpg";
import Data from './Image.js';
import {Link} from 'react-router-dom';
import {Button, Row,Col,Table,Image} from "react-bootstrap";
import { useState} from 'react';
import { FcWiFiLogo } from "react-icons/fc";
import { FaSwimmer} from "react-icons/fa";




function Accomodation() {

	const UserDetails = JSON.parse(localStorage.getItem('user'));
	
		
	  
return(

<>
<div className = "container text-center mt-5 p-5">
<h1> Accommodation </h1>
<Image  src={room}  rounded className = "img-fluid" style ={{height:300}}/>


<p>
We proudly offer you 43 centrally air conditioned, meticulously appointed, 
elegantly furnished with modern fittings & amenities for the comfort & 
convenience of both business travelers & individuals.</p>
<h4>Enjoy Wifi facitlity <FcWiFiLogo className='h1'/> <br/> and <br/> Swiming pool <FaSwimmer className='h1'/> </h4>




<Row sm={12} className = "my-5"> 
{ Data.map((data)=>

	<Col sm={4} key ={data.id}>
	<br/>
	<Image src={data.image} className='img-fluid' rounded />
	<h4>{data.name}</h4>
	<h5>Price: {data.price}£</h5>
	
	
{UserDetails ?
	<Button variant='dark'> <Link  state = {data} to  = {`/Booking`}>Book Now </Link> </Button>
	:
	<Button variant='dark'> <Link  to  ={`/Login`}>Book Now </Link> </Button>
}
	</Col> 

)}
	</Row>

</div>
</>
);
}

export default Accomodation;



