import React from 'react';
import './submit.css';


const DeletePage = () => {
  return (
    <div className="container">
      <div className="card1">
        <h3 className="text-2xl text-red-700">Your review deleted successfully!</h3>
        <div className="btn-container">
          <a href="/" className="btn btn-primary-h">Back to Home Page</a>          
        </div>
      </div>
    </div>
  );
}

export default DeletePage;
