import { useState } from "react";
import React from 'react';
function feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (ev) => {
    e.preventDefault();
    setSubmitted(true);



    console.log("Feedback submitted:", { name, email, message });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Feedback</h1>
      <p>We would love to hear your thoughts!</p>

      {submitted ? (
        <h3 >Thank you for your feedback!</h3>
      ) : (
        <form onSubmit={handleSubmit} >
          <div className="form-row">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(e.target.value)}
              required
            /></div>
          <div className="form-row">
            <label >Email:</label>
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(e.target.value)}
              required
            /></div>
          <div className="form-row">
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(ev) => setMessage(e.target.value)}
              required
            />
          </div>
<div className="form-row">
          <button type="submit" >
            Submit
          </button>
</div>
        </form>
      )}
    </div>
  );
}

export default feedback;