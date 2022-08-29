
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Topnav from './components/Topnav.js';
import Home from './components/Home.js';
import Contactus from './components/Contactus.js';
import Accomodation from './components/Accomodation.js';
import Reservation from './components/Reservation.js';
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
    <Route exact path = "/Reservation" element = {<Reservation/>} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
