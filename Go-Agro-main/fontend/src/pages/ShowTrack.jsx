// ShowTrack.jsx

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import VerticalLinearStepper from './Stepper';
import { StepperContext } from "./StepperContext"; // Import the StepperContext




const ShowTrack = () => {
  const { statusIndex } = useContext(StepperContext); 
  const [track, setTrack] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/tracks/${id}`)
      .then((response) => {
        setTrack(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Track</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Track Id</span>
            <span>{track._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Address</span>
            <span>{track.address}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Order Status</span>
            <span>{track.status}</span>

             {/* Render the Stepper component with dropdown disabled */}
          <Stepper statusIndex={statusIndex} editable={false} />
          </div>
         
        </div>
      )}
    </div>
  );
};

export default ShowTrack;
