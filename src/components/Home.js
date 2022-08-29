import React from 'react';
import location from '../Image/location.jpg';
import Image from "react-bootstrap/Image";

function Home(){
	return(
	<>
	<div className = "container text-center mt-5 p-5">
<h1>About Us</h1>
<div className="text-center">
<p> Since its inception in 1992, <strong> Hotel Nisarga </strong> has established an enviable reputation for refreshing hospitality, and personalized service.
<br/>
Its prime location & excellent business services make Hotel Nisarga the favorite among business travelers.
<br/>
Singularly committed to provide a touch of excellence & business ambience to its guests.</p>
</div>

<h3 className="text-center">Our Location</h3>
<Image className="mx-auto d-block" style ={{height:250}}rounded src = {location}/>
<p> Standing Majestically at Maharana Pratap Nagar <strong>Hotel Nisarga</strong> 
is a land mark in bustling Commercial Centre of Bhopal. </p>
        <ul className = " text-start">
        <li> 18 Km. from Airport.</li>
        <li>07 Km. from Bhopal Railway Station</li>
        <li>02 Km. from Habibganj Railway Station</li>
        <li>01 Km. from Bus stand</li>
        <li>03 Km. from Newmarket</li>
        </ul>

<p>Important Tourist Spots Easily accessible from Bhopal:</p>
        <ul className = "text-start">
        <li> Islamnagar     16 Km</li>
        <li> Sanchi Stupa       46 Km</li>
        <li>Pachmari        195 Km</li>
        <li>Raisen Fort         40 Km</li>
        <li>Raisen Fort         40 Km</li>
        <li>Mandu               270 Km</li>
        <li>Indore              200 Km</li>
        <li>Omkareshwar         300 Km</li>
        <li>Ujjain (Mahakaleshwar Temple)180 Km</li>
        </ul>
        </div>
	</>
	);
}


export default Home;