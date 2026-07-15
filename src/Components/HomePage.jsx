import React from 'react';
import { Link } from 'react-router';

import { useState, useEffect } from "react";

function homePage() {

    const [homepage, setHomePage] = useState(null);

    useEffect(() => {
        fetch("/stylemyoccasion.json")
            .then((response) => response.json())
            .then((data) => setHomePage(data));
    }, []);



    return (
        <div>

            {homepage ?

                (
                    <div className="homeContent">
                        <h1 className="homepage-header">{homepage.header}</h1>
                        <h2>{homepage.About}</h2>
                        
                         <div className="four-grid">
                        {
                            homepage.categories.map(category => (
                                 
                                <Link to={category.link} className="occasion-box" >
                                    <img src={category.img} alt={category.name} className="occasion-img" title={category.title} />
                                 
                                </Link>
                             
                            ))

                        }
                         </div>
                    </div>


                )
                : (
                    <p>Loading...</p>
                )}
        </div>
    );
}
export default homePage;