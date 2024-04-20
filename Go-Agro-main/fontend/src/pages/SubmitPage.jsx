import React from 'react';
import {Link} from 'react-router-dom';
import './submit.css';


const SubmitPage = () => {
    return (
       
        <div class="container">
        <div class="card">
          <h3 class="title">Thank You for your kind feedback!</h3>
          <div class="btn-container">
            <a href="/" class="btn btn-primary-h">Home</a>
            <a href="/reviews/show" class="btn btn-primary-r">My Reviews</a>
          </div>
        </div>
      </div>
      
        
        
    );
}
export default SubmitPage;