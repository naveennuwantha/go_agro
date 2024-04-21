import React from 'react';
import { Link } from 'react-router-dom';
import './submit.css';
import { BsCheckCircle } from 'react-icons/bs';

const SubmitPage = () => {  
  
  return (
    <div className="container">
      <div className="card">
        <div className="title-container">
        <BsCheckCircle className="icon" />
          <h3 className="title">Review Submitted </h3>
        </div>
        <h4 className="sub-title ml-10">
          Thank You for your kind feedback!
          Your insights will help <br/> other users make informed purchases.
        </h4>
        <div className="btn-container">
          <a href="/" className="btn btn-primary-h">Home</a>
          <Link to={'/reviews/show'} className="btn btn-primary-r">Check My Reviews</Link>
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
