import { useState ,useEffect } from "react";
import { useLocation } from 'react-router';
import React from 'react';
import  Thankyou from './ThankYou';
import '../feedback.css';



function feedback() {
  const location = useLocation();
const itemStyle = location.state?.itemStyle;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const title = itemStyle && itemStyle.title ? itemStyle.title : null;
;

  const handleSubmit = (ev) => {
    ev.preventDefault();
  
const newEntry = {
  comments: message,   
  name : name,
  email : email,
  type :  title ? 'O' : 'G',
  user: {
    id: '1' 
  }
};

if (title) {
  newEntry.outfits = { title: title };  
} 


fetch("http://localhost:8080/api/feedback", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newEntry)
})
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to submit feedback");
    }
    return res.json();
  })
  .then(data => {
    setSubmitted(true);
  })
  .catch(err => {
    console.error(err);
  });


  };

 const [allFeedback, setallFeedback] = useState(null);
 const uri = title ? `http://localhost:8080/api/feedback/outfit/${title}` : `http://localhost:8080/api/feedback/type/G`; 
    useEffect(() => {
            fetch(uri)
                .then((response) => response.json())
                .then((data) => setallFeedback(data));
        }, []);


  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Feedback</h1>
      
      {submitted ? (
        <>
          <Thankyou userName={name}  ></Thankyou>


        </>
      ) : (
        <div className="three-column-layout">

        <div className="column">  {itemStyle ? (
            <img src={itemStyle.img} alt={itemStyle.name} className="layout-image" />
           ):  <img src="images/feedback.jpg" alt="FeedBack" className="layout-image" /> }</div>

          <div className="column">
            <p>We would love to hear your thoughts!</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Name:</label>

                <input
                  type="text"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="column">
            <h2>All Submitted Feedback</h2>
            
             {/* Show only feedback matching the selected outfit OR general */}
            {allFeedback ? allFeedback.map((feedback) => 
              <p><strong>{feedback.name} :</strong> {feedback.comments}</p>) 
            : ( <p></p> )  }
          </div>
        </div>
      )}
    </div>
  );
}


export default feedback;