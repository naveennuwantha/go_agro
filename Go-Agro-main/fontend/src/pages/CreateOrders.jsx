// CreateOrders.jsx

import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import "./CreateOrders.css"; // Import CSS file

const CreateOrders = () => {
  const [buyername, setBuyername] = useState('');
  const [sellername, setSellername] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveOrder = () => {
    const data = {
      buyername,
      sellername,
      type,
      quantity,
      price,
    };
    setLoading(true);
    axios
      .post('http://localhost:5000/orders', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Order Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Order</h1>
      {loading ? <Spinner /> : ''}
      <div className='form-container'>
        <div className='form-group'>
          <label>Buyer Name:</label>
          <input
            type='text'
            value={buyername}
            onChange={(e) => setBuyername(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label>Seller Name:</label>
          <input
            type='text'
            value={sellername}
            onChange={(e) => setSellername(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label>Type:</label>
          <input
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label>Quantity:</label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label>Price:</label>
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='save-button-container'>
          <button className='form-btn' onClick={handleSaveOrder}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateOrders;
