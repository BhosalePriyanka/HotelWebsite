import React from 'react';
import suite from '../Image/suite.jpg';
import standard from '../Image/standard.jpg';
import delux from  '../Image/delux.jpg';
import room from "../Image/room.jpg";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Image from "react-bootstrap/Image";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Accomodation() {
return(
<>
	<div className = "container text-center mt-5 p-5">
<h1> Accommodation </h1>
<Image  src={room}  rounded className = "w-100" style ={{height:300}}/>

<p>
We proudly offer you 43 centrally air conditioned, meticulously appointed, 
elegantly furnished with modern fittings & amenities for the comfort & 
convenience of both business travelers & individuals.
</p>
<Container>
	<Row> 
	<Col>
	<Image rounded src = {suite}/>
	<p>Suite</p>
	</Col> 

	<Col>
	<Image rounded src = {standard}/>
	<p>Standard</p>
	</Col>
	
	<Col>
	<Image rounded src = {delux} />
	<p>Delux</p>
	</Col>
	</Row>
</Container>

<Table  bordered variant = "dark">
<thead>
<tr>
<th> Room Category</th>
<th>Single Occupancy</th>
<th>Double Occupancy</th>
</tr>
</thead>
<tr>
<td> Standrad </td>
<td>Rs. 3350.00 </td>
<td>Rs. 3850.00</td>
</tr>

<tr>
<td>Deluxe</td>
<td>Rs. 3750.00</td>
<td>Rs. 4250.00</td>
</tr>

<tr>
<td>Suite</td>
<td>-</td>
<td>Rs. 7550.00 </td>
</tr>

<tr>
<td>Extra Person</td>
<td>Rs. 600.00</td>
<td>-</td>
</tr>
</Table>
<br/>
<p className="text-center"> <strong> Note : - </strong>(Taxes are applicable on Room Tariff) GST 18% Checkin Time - 12 Noon | Checkout Time - 10Am.</p>
<p className="text-center"> <strong> Would you like to book room? <Link to = {`/Reservation`}> Book Now </Link> 
</strong> </p>
</div>
</>
);
}

export default Accomodation;



