import OccassionStyle from "./OccassionStyle";
import { Link } from 'react-router';
import { useState, useEffect } from "react";


function OfficeMeetings(){
 const [OfficeMeetings, setOfficeMeeting] = useState(null);
    useEffect(() => {
            fetch("/office-metting.json")
                .then((response) => response.json())
                .then((data) => setOfficeMeeting(data));
        }, []);



    return(
        <div>
        { OfficeMeetings ?
        
                        (
                            <div className="OfficeMeetingsContent">
                                <h1>{OfficeMeetings.header}</h1>
                                {
                                    OfficeMeetings.designs.map((design) => (
                                         
                                        <Link to={design.link} className="occasion-box" state={{ item : design  }}  key={design.name} >
                                        <img src={design.img } alt={design.name} className="occasion-img" />
                                         <p className="OfficeMeetings-label">{design.name}</p>
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
        
export default OfficeMeetings;