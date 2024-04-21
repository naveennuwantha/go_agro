import React from 'react';
import './submit.css';

const DeleteMsg = () => {  
  
  return (
    <div className="container">
      <div className="card">
        <h3 className="title">Your review deeleted successfully!</h3>
        <div className="btn-container">
          <a href="/" className="btn btn-primary-h">Back to Home Page</a>          
        </div>
      </div>
    </div>
  );
}

export default DeleteMsg;
