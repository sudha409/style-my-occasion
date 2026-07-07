import { Link } from 'react-router';

function header(){

return(
<div>
    <header>
        <h1>StyleMyOccasion</h1>
        <nav>
         <Link to="/">Home</Link>
          <Link to="/aboutUs">AboutUs</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>
        </header>
</div>
 );


}


export default header;