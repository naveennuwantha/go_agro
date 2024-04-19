import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const FullNotification = () => {
  const [notification, setNotification] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/notifications/${id}`)
      .then((res) => {
        setNotification(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
    <BackButton />    
    {loading ? (
      <Spinner />
    ) : (
      <div className='flex items-center justify-center mt-20'>
      <div className='flex flex-col border border-gray-300 rounded-xl shadow-md p-4 max-w-[800px] '>
       
        <div className='my-4'>
          <span className='ml-4'>{notification.fullMsg}</span>
        </div>
      
        <div className='my-4'>
          <span className='text-lg text-gray-700 font-semibold font-montserrat'>Create Time:</span>
          <span className='ml-4'>{new Date(notification.createdAt).toLocaleString()}</span>
        </div>
        
      </div>
      </div>
    )}
  </div>
  );
};

export default FullNotification;