import React from 'react';
import { Link } from 'react-router-dom';
import './submit.css';

const SubmitPage = () => {  
  
  return (
    <div className="container">
      <div className="card">
        <h3 className="title">Thank You for your kind feedback!</h3>
        <div className="btn-container">
          <a href="/" className="btn btn-primary-h">Home</a>
          <Link to={'/reviews/show'} className="btn btn-primary-r">Check My Reviews</Link>
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
