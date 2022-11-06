import React from 'react';
import {Form , Button} from 'react-bootstrap';
import {useState , useEffect} from 'react';
import Validate from './Validate.js';
import {useNavigate} from 'react-router-dom'



function Signup(){

const [input,setInput] = useState({
        first_Name :'',
        last_Name : '',
        address : '',
        contact : '',
        email : '',
        password: '',
    });


const[error,setError] = useState({});

const navigate= useNavigate();
const handleInput = (event) => {
    event.preventDefault();
setInput({...input , [event.target.name] : event.target.value});
}

const handleSubmit = async(event) => {
event.preventDefault();
setError(Validate(input,true,false));

/*JSON data get */
const res = await fetch('http://localhost:3000/users');
const jsonData = await res.json();
console.log(jsonData);

/* JSON data post */
if(error.isValid ){
fetch('http://localhost:3000/users', {
method : 'POST',
headers: {
            "Content-Type" : "application/json",
         },
body : JSON.stringify(input),
})
.then(()=> {
    alert("You are registed. Please sign up.")
    navigate(`/Login`)
})
 .then(() => { 
          })
};

}

  /* DELETE request using fetch with set headers
useEffect(() => {
    fetch('http://localhost:3000/users/41', {
        method: 'DELETE'
    }).then(() => alert("Deleted"));
}, []);
*/

return(
<>
<div className = "container text-center mt-5 p-5">
<h1> Signup Form</h1>
<Form className ="border shadow col-lg-6 col-sm-12 p-5 mx-auto">

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
<Form.Control  type="email" name="email"  value = {input.email_Id} onChange = {handleInput}/> 
{error.email && <p className ="text-danger"> {error.email} </p>}
</Form.Group>

<Form.Group>
<Form.Label> Password </Form.Label>  
<Form.Control  type="password" name="password"  value = {input.password} onChange = {handleInput}/> 
{error.password && <p className ="text-danger"> {error.password} </p>}
</Form.Group>

<br/>
<Button type="submit" onClick = {handleSubmit}>Submit</Button>

</Form>
</div>
</>
)
}

export default Signup;

