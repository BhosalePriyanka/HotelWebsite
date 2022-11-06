import { useLocation } from "react-router-dom"
import { useState } from "react";
import {Image,Table,Form, Row, Col, Button,Alert} from "react-bootstrap";
import Data from './Image.js';

const Booking = ()=> {
    
    const location = useLocation();
    const {image,name} = location.state;
    const userDetails =  JSON.parse(localStorage.getItem('user'));
    const [input,setInput] = useState({
   email: '',
   type:'',
   adult:'',
   child:'',
   dateto:'',
   datefrom:'',
   amount:''
      });
 
    const handleInput = (event) => {
    setInput({...input , [event.target.name] : event.target.value});

    }
    
console.log(input)


const handleClick = (event) => {

  event.preventDefault(event);

fetch('http://localhost:3000/Booking',{
  method: 'POST',
  headers: {
    "Content-Type" : "application/json",
 },
body : JSON.stringify(input),
}).then(()=>{
  alert("Your room booked.")
  window.location.reload();
}).then(()=>{
});

 }
 
// calculate no of days booked
const date1 = new Date(input.dateto);
const date2 = new Date(input.datefrom);
const d1 = date1.getDate();
const d2 = date2.getDate();
 let d =  d1-d2 ;
 // isNaN method check if value is NaN or number 
 if(isNaN(d)) { d = 0 }

 
return(
<>
<div className = "container text-center mt-5 p-5">

<Row sm={12}>
<Col>
<Form className ="border shadow m-5 p-5 rounded">
  <Form.Group>
  <Form.Label className="fw-bold">Email Id</Form.Label>
  <Form.Control  readOnly type="emaild" name="email" value={input.email = userDetails.email} onChange={handleInput} className ="text-center"></Form.Control>
  </Form.Group>

  <Form.Group>
    <Form.Label className="fw-bold">Room Type</Form.Label>
    <Form.Control  readOnly type="text" name="type" value={input.type = name} onChange={handleInput} className="text-center"></Form.Control>
  </Form.Group>
<Row>
      <Col sm={6}>
      <Form.Label className="fw-bold">Adult </Form.Label> 
      <Form.Select aria-label="adult"  name="adult" value = {input.adult} onChange={handleInput} className="text-center">
          <option>Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </Form.Select>
        </Col>

      <Col sm={6}>
      <Form.Label className="fw-bold" >Child </Form.Label> 
          { location.state.name === "Standard" ?
            <Form.Select aria-label="child" name="child" value = {input.child} onChange = {handleInput} className="text-center">
            <option>0</option>
            </Form.Select>
            : ''
            }

          { location.state.name === "Delux" ?
            <Form.Select aria-label="child" name="child" value = {input.child} onChange = {handleInput} className="text-center">
            <option>Select</option>
            <option value="0">0</option>
            <option value="1">1</option>
            </Form.Select>
            : ''
            }

         { location.state.name === "Suite" ?
            <Form.Select aria-label="child" name="child" value = {input.child} onChange = {handleInput}>
            <option>Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            </Form.Select>
            : ''
            }
        </Col>
</Row>
<Row>
  <Col>
  <Form.Label className="fw-bold"> Booking Date From</Form.Label>
  <Form.Control  type="date" name="datefrom" value = {input.datefrom} onChange = {handleInput} placeholder="DD-MM-YYYY" className="text-center"/> 
  </Col>
  <Col>
  <Form.Label className="fw-bold"> Booking Date To</Form.Label>
  <Form.Control  type="date" name="dateto" value = {input.dateto} onChange = {handleInput} placeholder="DD-MM-YYYY" className="text-center"/>
  </Col>
</Row>
          <Form.Label className="fw-bold"> Amount</Form.Label>

          { location.state.name === "Standard"  ?
          <Form.Control readOnly  type="number" name="amount"  value = { input.amount = 50 * input.adult *  d }
            onChange = {handleInput} className="text-center"/> 
          : ''}
          { location.state.name === "Delux" ?
          <Form.Control  readOnly type="number" name="amount" value = { input.amount = 100 * input.adult * d} onChange = {handleInput} 
          className="text-center" /> 
          : ''}
          { location.state.name === "Suite" ?
          <Form.Control  readOnly type="number" name="amount" value = { input.amount = 200 * d}  onChange = {handleInput} 
           className="text-center" /> 
          : ''}
          
{input.amount === 0 ? '' : <Button className="m-5" onClick={handleClick}>Pay Now</Button>}

</Form>
</Col>

<Col>
<h3>Room Type - {name}</h3>
<Image src ={image}  style={{width:"70%"}} className='m-5' roundedCircle />
</Col>
</Row>



</div>
 </>


    )
}

export default Booking;