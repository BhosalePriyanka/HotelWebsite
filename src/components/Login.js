import React , {memo } from 'react'
import {Button, Col,Row,Form} from 'react-bootstrap';
import {useState} from 'react';
import Validate from './Validate.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = memo(() => {
  const[input,setInput] = useState({
    email: '',
    password:''
    })

const[error , setError] =useState({})
const navigate = useNavigate();
    
const hanldeChange = (event) => {
      setInput({...input, [event.target.name]: event.target.value})
    }
    
const handleSubmit = async() =>{
      setError(Validate(input,false,true,false));
      const res = await fetch('https://hote-json.onrender.com/users');
      const data = await res.json();

      const userdetails = data.filter((data)=>{
      return data.email === input.email && data.password === input.password
      });
      
      if(userdetails[0]){
      localStorage.setItem('user', JSON.stringify(userdetails[0]));
       navigate('/Accommodation');
      // window.location.reload();
      }
      
      else{
        alert('Login failed, check incorrect details.')
      }
  } 
    

  return (
    <div className = "container text-center mt-5 p-5">
      <h1>Login Form</h1>
      <Row sm={12}>
        <Col sm={6} className= "mx-auto">
        <Form className ="border shadow  p-5 rounded">
            <Form.Group>
            <Form.Label> Email-Id</Form.Label>
            <Form.Control type="email" name = "email" value={input.email} autoComplete="off" onChange={hanldeChange}/>
            {error.email && <p className="text-danger">{error.email}</p>}
            </Form.Group>

            <Form.Group>
            <Form.Label> Password</Form.Label>
            <Form.Control type="password" name="password" value={input.password} autoComplete="off"  onChange={hanldeChange}/>
            {error.password && <p className="text-danger">{error.password}</p>}
            </Form.Group>
            <br/>
            <Button onClick={handleSubmit}> Submit</Button>

            <p>New user Signup Now <Link to = {`/Signup`}>Signup</Link></p>
        </Form>
        </Col>
      </Row>
        
    </div>
  )
})

export default Login
