import OccassionStyle from "./OccassionStyle";
import { Link } from 'react-router';
import { useState, useEffect } from "react";
import '../party.css';



function party(){
     const [party, setparty] = useState(null);
    useEffect(() => {
            fetch("partys.json")
                .then((response) => response.json())
                .then((data) => setparty(data));
        }, []);
        return(

        <div>
        
                    { party ?
        
                        (
                            <div className="party">
                                <h1 className="party-text">{party.header}</h1>
                                <h2>{party.About}</h2>
                                {
                                    party.designs.map((design) => (
                                         
                                        <Link to={design.link} className="occasion-box" state={{ item : design  }}  key={design.name} >
                                        <img src={design.img } alt={design.name} className="occasion-img"title={design.title} />
                                        
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