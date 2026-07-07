import React from 'react';
import { Link } from 'react-router';
import BirthDayimage  from '../assets/sudha.jpg'
import Birthday from './Birthday';
import Wedding from './Wedding';
import OfficeMeetings from './Officemeetings';
import Party from './Party';
function homePage(){
    return(
        <div  className="homeContent">
        <h1>StyleMyOccasion</h1>

<Link to="/birthday" className="occasion-box">
  <img src={BirthDayimage } alt="Birthday" className="occasion-img" />
  <p className="occasion-label">Birthday</p>
</Link>

<Link to="/wedding" className="occasion-box">
  <img src={BirthDayimage} alt="Wedding" className="occasion-img" />
  <p className="occasion-label">Wedding</p>
</Link>

<Link to="/OfficeMeetings" className="occasion-box">
  <img src={BirthDayimage } alt="OfficeMeetings" className="occasion-img" />
  <p className="occasion-label">OfficeMeetings</p>
</Link>


<Link to="/Party" className="occasion-box">
  <img src={BirthDayimage } alt="Party" className="occasion-img" />
  <p className="occasion-label">Partys</p>
</Link>
        
        </div>
    )
}
export default homePage;