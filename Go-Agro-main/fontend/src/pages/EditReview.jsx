import React, { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { FaStar } from 'react-icons/fa';
import '../App.css';

const EditReviews = () => {
  const [buyername, setBuyername] = useState('');
  const [content, setContent] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [rating, setRating] = useState(0);
  const [ordernumber, setOrdernumber] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [hover, setHover] = useState(null);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/reviews/${id}`)
      .then((response) => {
        setBuyername(response.data.buyername);
        setContent(response.data.content)
        setPublishDate(response.data.publishDate)
        setRating(response.data.rating)
        setOrdernumber(response.data.ordernumber)
        setType(response.data.type)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])

  const handleEditReview = () => {
    const data = {
      buyername,
      content,
      publishDate,
      rating,
      ordernumber,
      type,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/reviews/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Review Edited successfully', { variant: 'success' });
        navigate('/reviews/show');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  const toggleBoxSelection = (index) => {
    if (selectedBoxes.includes(index)) {
      setSelectedBoxes(selectedBoxes.filter((boxIndex) => boxIndex !== index));
    } else {
      setSelectedBoxes([...selectedBoxes, index]);
    }
  };

  // Function to generate the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  // Set the initial value of publishDate to the current date
  useEffect(() => {
    setPublishDate(getCurrentDate());
  }, []);

  return (
    <div className='p-4'>
      <div className='flex'>
        <Link
          to="/reviews/show"
          className='bg-green-800 text-white px-4 py-1 rounded-lg w-fit absolute  left-4'
        >
          <BsArrowLeft className='text-2xl' />
        </Link>
      </div>
      <h1 className='text-3xl my-5 text-center text-green-700'>Edit My Review</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 rounded-xl w-[950px] shadow-md p-8 mx-auto'>
        
      <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>Order Name</label>
          <input
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='input-field mt-2'
          />
        </div>

        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>Order Number</label>
          <input
            type='text'
            value={ordernumber}
            onChange={(e) => setOrdernumber(e.target.value)}
            className='input-field mt-2'
          />
        </div>
        
        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>User Name</label>
          <input
            type='text'
            value={buyername}
            onChange={(e) => setBuyername(e.target.value)}
            className='input-field mt-2'
          />
        </div>

        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>Select Descriptions</label>
          <div className="description-boxes">
            <div
              className={`box ${selectedBoxes.includes(1) && 'selected'}`}
              onClick={() => toggleBoxSelection(1)}
            >
              Not as shown
            </div>
            <div
              className={`box ${selectedBoxes.includes(2) && 'selected'}`}
              onClick={() => toggleBoxSelection(2)}
            >
              Timely Delivery
            </div>
            <div
              className={`box ${selectedBoxes.includes(3) && 'selected'}`}
              onClick={() => toggleBoxSelection(3)}
            >
              Smooth Process
            </div>
            <div
              className={`box ${selectedBoxes.includes(4) && 'selected'}`}
              onClick={() => toggleBoxSelection(4)}
            >
              Good Quality
            </div>
            <div
              className={`box ${selectedBoxes.includes(5) && 'selected'}`}
              onClick={() => toggleBoxSelection(5)}
            >
              Trustworthy Supplier
            </div>
          </div>
        </div>

        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>Add Written Review</label>
          <textarea
            value={content}
            placeholder="How's the quality of the product? Is it worth its price?"
            onChange={(e) => setContent(e.target.value)}
            className='input-field mt-2 h-60 resize-none'
            rows={4}
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
        <div className='my-2 flex justify-center'>
          <button className='p-2 bg-green-800 m-8 rounded-xl w-[350px] text-white' onClick={handleEditReview}>
            Resubmit Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditReviews