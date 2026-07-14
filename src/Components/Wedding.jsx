
import OccassionStyle from "./OccassionStyle";

import { Link } from 'react-router';

import { useState, useEffect } from "react";


function weddingPage(){
    const [weddingPage, setwedding] = useState(null);
    useEffect(() => {
            fetch("/wedding.json")
                .then((response) => response.json())
                .then((data) => setwedding(data));
        }, []);
        return(
    <div>
        
                    { weddingPage ?
        
                        (
                            <div className="weddingContent">
                                <h1>{weddingPage.header}</h1>
                                <h2>{weddingPage.About}</h2>
                                {
                                    weddingPage.designs.map((design) => (
                                         
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
export default weddingPage;