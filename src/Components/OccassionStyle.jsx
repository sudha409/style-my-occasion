import BirthDayimage from '../assets/sudha.jpg'
import '../occasionstyle.css';
import { Link } from 'react-router';

function occassionStyle() {
    return (

        <div>
            <div className="occasion-container">

                <div className="imageStyle">
                    <img src={BirthDayimage} alt="Birthday" className="occasion-img" />

                </div>


                <div className="description">
                    <h1>Style Description</h1>
                    <p>
                        Celebrate your special day with a stylish and unique outfit.
                        Choose colors, accessories, and styles that match your personality.
                    </p>

                    <div className="descriptionStyle-buttons">
                        <button className="btn-addtocart">Add To Cart</button>
                        <Link to="/feedback"><button className="btn-feedback" >Feedback</button></Link> 
                      
                    </div>
                </div>
  
            </div>


        </div>
    )
}
export default occassionStyle;