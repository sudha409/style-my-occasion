import { Link } from 'react-router';


function header(){

return(
<div>
    <header>
      
        <h1  className="headerLogo" > 
            <img src="images/logo.png" alt="SMO" className="occasion-img" title="StyleMyOccasion"  style={{ width: "55px", height: "55px", borderRadius: "50%" }} /> 
            StyleMyOccasion
            </h1>
      
        <nav>
         <Link to="/">Home</Link>
          <Link to="/aboutUs">About&nbsp;&nbsp;Us</Link>
          <Link to="/feedback">Feedback</Link>
          
        </nav>
      
        </header>
</div>
 );


}


export default header;