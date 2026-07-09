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
                        <h1>{homepage.header}</h1>
                        {
                            homepage.categories.map(category => (
                                 
                                <Link to={category.link} className="occasion-box" >
                                    <img src={category.img} alt={category.name} className="occasion-img" />
                                    <p className="overlay">{category.name}</p>
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
export default homePage;