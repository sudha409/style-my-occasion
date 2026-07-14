import OccassionStyle from "./OccassionStyle";
import BirthDayimage  from '../assets/sudha.jpg';
import { Link } from 'react-router';

import { useState, useEffect } from "react";

function birthday(){
    const [birthday, setBirthday] = useState(null);
    useEffect(() => {
            fetch("/birthdays.json")
                .then((response) => response.json())
                .then((data) => setBirthday(data));
        }, []);
    
    
    return(
        <div>
        
                    { birthday ?
        
                        (
                            <div className="birthdayContent">
                                <h1>{birthday.header}</h1>
                                <h2>{birthday.About}</h2>
                                {
                                    birthday.designs.map((design) => (
                                         
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