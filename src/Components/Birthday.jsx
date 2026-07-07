import OccassionStyle from "./OccassionStyle";
import BirthDayimage  from '../assets/sudha.jpg';
import { Link } from 'react-router';
function birthday(){
    return(
        <div>
            <h1>Birthday Outfit Ideas</h1>
           
            
<Link to="/OccassionStyle" className="occasion-box">
  <img src={BirthDayimage } alt="Birthday" className="occasion-img" />
  <p className="occasion-label">Birthday</p>
</Link>
        </div>
    )
}
export default birthday;