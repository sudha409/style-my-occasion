import OccassionStyle from "./OccassionStyle";
import BirthDayimage  from '../assets/sudha.jpg';
import { Link } from 'react-router';

import { useState, useEffect } from "react";
import '../birthday.css';

function birthday(){
     // State to store the JSON data after fetching
    const [birthday, setBirthday] = useState(null);
    // Fetch birthday JSON data when component load
    useEffect(() => {
            fetch("birthdays.json")
                .then((response) => response.json())// Convert response to JSON
                .then((data) => setBirthday(data));// Save JSON data into state
        }, []);// Empty array → runs only once
    
    
    return(
        <div>
        
                    { birthday ?
        
                        (
                            <div className="birthdayContent">
                                <h1 className="birthday-text">{birthday.header}</h1>
                                <h2>{birthday.About}</h2>
                                {
                                    birthday.designs.map((design) => (
                                        // Link to design page with design data passed via state 
                                        <Link to={design.link}className="occasion-box" state={{ item : design  }}  key={design.name}  >
                                        <img src={design.img } alt={design.name} className="occasion-img" title={design.title} />
                                         
                                        </Link>
                                     
                                    ))
        
                                }
                            </div>
        
        
                        )
                        : (
                            <p>Loading...</p>
                        )}
                </div>
            );
        }
           
        export default birthday;