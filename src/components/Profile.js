import React, { useEffect,memo, useState } from 'react'
import Data from './Image';
import {Row, Col, Table} from 'react-bootstrap';

const Profile = memo(() =>{
    const[details,setDetails] = useState([]);

 // Login user deatil
    const userDetails =  JSON.parse(localStorage.getItem('user'));
// Get data from booking
    const FetchData = async() =>{
    const res = await fetch('booking');
    const Data = await res.json();
    const bookingDetails = Data.filter((data)=>{return data.email === userDetails.email })
    setDetails(bookingDetails)
    }

    useEffect(()=>{
    FetchData();
    },[])
    console.log(details)
    console.log(userDetails)

    // Current Date
    //To get format like "YYYY-MM-DD": toISOString().slice(0, 10)

    const date = new Date().toISOString().slice(0, 10)

   
    console.log(date);
   

    return(
        <>
        <div className = "container text-center mt-5 p-5">  
        <h1> Welcome To Our Resort</h1> 
        {details.map((details)=>
        <>
          { date > details.datefrom ?  
            <Row>
         <Col sm ={6} className="mx-auto">
          <h3>Booking History</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Booking Name</th>
          <th>Booking Date</th>
          <th>Amount Paid</th>
          <th>Room Type</th>
          <th>Booking</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{details.type}</td>
          <td>{userDetails.first_Name} {userDetails.last_Name}</td>
          <td>{details.datefrom} To {details.dateto}</td>
          <td>{details.amount}</td>
          <td>Completed </td>
        </tr>
      </tbody>
    </Table>
        </Col>
        </Row>

         : 
         
        <Row>
         <Col sm ={6} className="mx-auto">
         <h3>Upcoming Booking </h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Booking Name</th>
          <th>Booking Date</th>
          <th>Amount Paid</th>
          <th>Room Type</th>
          <th>Booking</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{details.type}</td>
          <td>{userDetails.first_Name} {userDetails.last_Name}</td>
          <td>{details.datefrom} To {details.dateto}</td>
          <td>{details.amount}</td>
          <td>Confimed </td>
        </tr>
      </tbody>
    </Table>
        </Col>
        </Row>
                }

        </>
        )}
    
        </div>
        </>
    
    )
})
export default Profile;