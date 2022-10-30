
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Topnav from './components/Topnav.js';
import Home from './components/Home.js';
import Contactus from './components/Contactus.js';
import Accomodation from './components/Accomodation.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Booking from './components/Booking';
import Profile from './components/Profile';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
    <Router>
    <Topnav/>
    <Routes>
    <Route exact path = "*" element = {<Home/>} />
    <Route exact path = "/Contactus" element = {<Contactus/>} />
    <Route exact path = "/Accommodation" element = {<Accomodation/>} />
    <Route exact path = "/Signup" element = {<Signup/>} />
    <Route exact path = "/Login" element = {<Login/>} />
    <Route exact path = "/Booking" element = {<Booking/>} />
    <Route exact path = "/Profile" element = {<Profile/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
