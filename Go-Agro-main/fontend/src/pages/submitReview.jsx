import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const submitReview = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();



  return (
    <div className='p-4'>
      
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-green-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Thank You for your feedback ! Your review added successfully.</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-80 rounded-xl'
          onClick={'/'}
        >
          Home
        </button>
        <button
          className='p-4 bg-red-600 text-white m-8 w-80 rounded-xl'
          onClick={'/reviews/details/:id'}
        >
          My Review
        </button>
      </div>
    </div>
  )
}

export default submitReview;