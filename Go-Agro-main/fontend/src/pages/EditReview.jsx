import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { FaStar } from 'react-icons/fa';
import '../App.css';

const EditReviews = () => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/reviews/${id}`)
    .then((response) => {
      setUsername(response.data.username);
      setContent(response.data.content)
      setPublishDate(response.data.publishDate)
      setRating(response.data.rating)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])

  const handleEditReview = () => {
    const data = {
      username,
      content,
      publishDate,
      rating,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/reviews/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Review Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-5 text-center text-green-700'>Edit My Review</h1>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col border-2 border-green-400 rounded-xl w-[600px] p-8 mx-auto'>
      <div className='my-5 flex flex-col'>
        <label className='text-l mr-4 text-black-500'>User Name</label>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input-field mt-2'
        />
      </div>
      <div className='my-5 flex flex-col'>
        <label className='text-l mr-4 text-black-500'>Review</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='input-field mt-2 h-60 resize-none' // Added 'resize-none' to prevent resizing
          rows={4} // Adjust the number of rows as needed
        />
      </div>

      <div className='my-5 flex items-center'>
        <label className='text-l mr-4 text-black-500'>Rating</label>
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index} className='flex items-center'>
              <input
                type='radio'
                name='rating'
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className='star'
                size={35}
                color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className='my-5 flex flex-col'>
        <label className='text-l mr-4 text-black-500'>Date</label>
        <input
          type='date'
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          className='input-field mt-2'
        />
      </div>

      <button className='p-2 bg-green-700 m-8 rounded-xl' onClick={handleEditReview}>
        Submit
      </button>
    </div>
  </div>
  );
}

export default EditReviews