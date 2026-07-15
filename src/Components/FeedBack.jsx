import { useState } from "react";
import { useLocation } from 'react-router';
import React from 'react';
import '../feedback.css';
import  Thankyou from './ThankYou';


function feedback() {

  const location = useLocation();
  const itemStyle = location.state?.itemStyle;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // If outfit exists → use its title; otherwise use "Genaral"
  // This helps filter feedback for specific outfit or general feedback
const title = itemStyle?.title || "Genaral";

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSubmitted(true);
    // Load existing feedback from localStorage
    const existing = JSON.parse(localStorage.getItem("feedbackList")) || [];

    const newEntry = { name, email, message,title };
    existing.push(newEntry);
     // Save updated list back to localStorage
    localStorage.setItem("feedbackList", JSON.stringify(existing));
  };
  // Load all feedback from localStorage
  const allFeedback = JSON.parse(localStorage.getItem("feedbackList")) || [];

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
           ):  <img src="/images/feedback.jpg" alt="FeedBack" className="layout-image" /> }</div>

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
            {allFeedback
            .filter(item => item.title === title)
            .map((item, index) => (
              <div key={index} style={{ marginTop: "10px" }}>
               <p><strong>{item.name} :</strong> {item.message}</p>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


export default feedback;