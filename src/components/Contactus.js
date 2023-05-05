import React from 'react';
import {Form , Button,Col,Row} from 'react-bootstrap';
import { useState } from 'react';
import Validate from './Validate.js';
import {useNavigate} from 'react-router-dom'




function Contactus(){

const[input,setInput] = useState({
name:'',
contact :'',
email : '',
message:'',
});

const[error,setError] = useState({});
const navigate= useNavigate();

const handleInput = (event ) => {
 setInput({...input,[event.target.name]: event.target.value});
}

const handleSubmit = async (event) =>{

event.preventDefault();
setError(Validate(input,false,false,false));

//  JSON data post 

if(error.isValid ){
fetch('https://hote-json.onrender.com/msgs', {
method : 'POST',
headers: {
            "Content-Type" : "application/json",
         },
body : JSON.stringify(input),
})
.then(()=> {
    alert("Message Sent.")
    navigate(`/Home`)
})
 .then((error) => { 
    console.log(error)
          })
};
}



return(
<>
<div className = "container  text-center mt-5 p-5">
<h1>Contact Us</h1>
<p className="text-center"> We will be available at the office below. Do not hesitate to contact us.
 Our team of friendly consultants is on hand to provide personalized service to all our customers.
 <br/>
 Please get in touch with us using the given feedback form or visit us at the below mentioned addresses or,
 dial the telephone nos. provided. <br/>
 We will be delighted to hear from you! </p>

<address> <strong> Address </strong> <br/>
Hotel Nisarga Pvt ltd<br/>
211, Zone-I, Maharana Pratap Nagar,<br/>
Bhopal-462011 (India)<br/>
Tele-Fax : +91 - 755 - 4272701,2555701-2-3, 2558948-49, 9826329569 <br/>
E-mail : info@hotelnisarga.com,  hotelnisarga@gmail.com <br/>
</address>

<Row sm={6}>
	<Col sm={6} className="mx-auto">
	<Form className = "border shadow p-5 rounded">
	<Form.Group>
	<Form.Label> Name: </Form.Label>
	<Form.Control type="text" name="name" value= {input.name} onChange={handleInput}/> 
	{error.name && <p className = 'text-danger'> {error.name} </p>}
	</Form.Group>

	<Form.Group> 
	<Form.Label>Contact No:</Form.Label>
	<Form.Control type="telephone" name="contact" value= {input.contact} onChange={handleInput}/>
	{error.contact && <p className = 'text-danger'>{error.contact}</p>}
	</Form.Group>

	<Form.Group>
	<Form.Label> Email Id: </Form.Label> 
	<Form.Control type="email" name="email" onChange={handleInput} value= {input.email}/> 
	{error.email && <p className ="text-danger"> {error.email} </p> }
	</Form.Group>

	<Form.Group>
	<Form.Label> Message: </Form.Label> 
	<Form.Control as="textarea"  name="message" value={input.message} onChange={handleInput}/> 
	{error.message && <p className="text-danger"> {error.message}</p>}
	</Form.Group>

	<br/>
	<Button type="submit" onClick={handleSubmit}>Submit</Button>
	</Form>
	</Col>
</Row>

	

	
	</div>
</>
)
}

export default Contactus;