import React from 'react';
import {Form , Button} from 'react-bootstrap';
import {useState , useEffect} from 'react';
import Validate from './Validate.js';



function Reservation(){

const [input,setInput] = useState({
        first_Name :'',
        last_Name : '',
        address : '',
        contact : '',
        email_Id : '',
        room_Type :'',
        noof_Rooms : '',
        date : '',
    });


const[error,setError] = useState({});

const[status,setStatus] = useState('');
 
const handleInput = (event) => {
    event.preventDefault();
setInput({...input , [event.target.name] : event.target.value});
}

const handleSubmit = async(event) => {
event.preventDefault();
setError(Validate(input));

/*JSON data get */
const res = await fetch('http://localhost:3000/users');
const jsonData = await res.json();
const filterEmail = jsonData.filter( jsonData => { return jsonData.email_Id === input.email_Id });


/* JSON data post */
if(error.isValid){
fetch('http://localhost:3000/users', {
method : 'POST',
headers: {
            "Content-Type" : "application/json",
         },
body : JSON.stringify(input),
})
.then(()=> {
    alert("Account Created")
})
 .then(() => { 
          })
}
}

return(
<>
<div className = "container text-center mt-5 p-5">
<h1> Advance Booking </h1>
<Form className ="border border-dark col-lg-6 col-sm-12 p-5 mx-auto">

<Form.Group>
<Form.Label> First Name </Form.Label> 
<Form.Control  type="text" name= "first_Name"  value = {input.first_Name} onChange = {handleInput}/> 
 {error.first_Name && <p className ="text-danger"> {error.first_Name} </p>}

<Form.Label> Last Name </Form.Label>
<Form.Control   type="text" name="last_Name" onChange = {handleInput} value = {input.last_Name}/>
{error.last_Name && <p className ="text-danger"> {error.last_Name} </p>}
</Form.Group>

<Form.Group>
 <Form.Label> Address </Form.Label> 
 <Form.Control type="text" name="address" value = {input.address} onChange = {handleInput}/>
 {error.address && <p className ="text-danger"> {error.address} </p>} 
</Form.Group>

<Form.Group>
<Form.Label>Contact No</Form.Label>
<Form.Control type = "telephone" name="contact" value = {input.contact} onChange={handleInput}/>
{error.contact && <p className="text-danger">{error.contact} </p>}
</Form.Group>

<Form.Group>
<Form.Label>  Email Id </Form.Label>  
<Form.Control  type="email" name="email_Id"  value = {input.email_Id} onChange = {handleInput}/> 
{error.email_Id && <p className ="text-danger"> {error.email_Id} </p>}
</Form.Group>

<Form.Group>
<Form.Label> Room Type </Form.Label> 

<Form.Control list="Room Type" name="room_Type" value = {input.room_Type} onChange = {handleInput}/> 
<datalist id="Room Type">
<option value="Single"/>
<option value="Double"/>
<option value="Extra Person"/>
</datalist> 

{error.room_Type && <p className ="text-danger"> {error.room_Type} </p>}
</Form.Group>

<Form.Group>
<Form.Label> No of Rooms </Form.Label> 
<Form.Control list="No of Rooms" name="noof_Rooms" value = {input.noof_Rooms} onChange = {handleInput}/> 
<datalist id="No Of Rooms">
<option value="1" />
<option value="2" />
<option value="3" />
<option value="4" />
<option value="5" />
</datalist>
{error.noof_Rooms && <p className ="text-danger"> {error.noof_Rooms} </p>}
</Form.Group>

<Form.Group>
 <Form.Label>  Date </Form.Label> 
<Form.Control  type="date" name="date" value = {input.date} onChange = {handleInput} placeholder="DD-MM-YYYY"/> 
{error.date && <p className ="text-danger"> {error.date} </p>}
</Form.Group>

<br/>
<Button type="submit" onClick = {handleSubmit}>Submit</Button>

</Form>
</div>
</>
)
}

export default Reservation;

