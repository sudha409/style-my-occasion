import OccassionStyle from "./OccassionStyle";
import { Link } from 'react-router';
import { useState, useEffect } from "react";



function party(){
     const [party, setparty] = useState(null);
    useEffect(() => {
            fetch("/partys.json")
                .then((response) => response.json())
                .then((data) => setparty(data));
        }, []);
        return(

        <div>
        
                    { party ?
        
                        (
                            <div className="party">
                                <h1>{party.header}</h1>
                                {
                                    party.designs.map((design) => (
                                         
                                        <Link to={design.link} className="occasion-box" state={{ item : design  }}  key={design.name} >
                                        <img src={design.img } alt={design.name} className="occasion-img" />
                                         <p className="wedding-label">{design.name}</p>
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
        
export default party;