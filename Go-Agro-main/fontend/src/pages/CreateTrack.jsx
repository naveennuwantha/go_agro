import React, { useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateTrack = () => {
    const [OrderId, setOrderId] = useState('');
    const [address, setAddress] = useState('');
    const status = "Order Confirmed"; // Fixed status
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // State to store validation error
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveTrack = () => {
        // Frontend validation for Order ID length
        if (OrderId.length > 4) {
            setError('OrderId must not have more than 4 characters');
            return;
        }

        const data = {
            OrderId,
            address,
            status,
        };
        setLoading(true);
        axios
        .post(`http://localhost:5555/tracks`, data)
        .then(() => {
            setLoading(false);
            enqueueSnackbar('Track Created successfully', { variant: 'success' });
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            if (error.response && error.response.data && error.response.data.error) {
                // Handle validation error from backend
                setError(error.response.data.error);
            } else {
                console.error('An error happened:', error);
                enqueueSnackbar('Error', { variant: 'error' });
            }
        });
    };

    return (
        <div className="flex justify-center items-center h-full" style={{ backgroundImage: 'url(""C:\Users\ASUS\Desktop\paddy.jpg"")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="p-4" style={{ backgroundColor: 'rgba(247, 250, 252, 0.7)', borderRadius: '1rem' }}>
                <BackButton/>
                <h1 className="text-3xl my-4" style={{ color: '#1a202c', textAlign: 'center' }}>Create Track</h1>
                {loading ? <Spinner/> : ''}
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto" style={{ borderColor: '#4fd1c5' }}>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500" style={{ color: '#4a5568' }}>Order ID</label>
                        <input
                            type="text"
                            value={OrderId}
                            onChange={(e) => {
                                setOrderId(e.target.value);
                                setError(null); // Clear validation error when input changes
                            }}
                            className="border-2 border-gray-500 px-4 py-2 w-full"
                            style={{ borderRadius: '0.375rem' }}
                        />
                        {error && error.includes('OrderId') && (
                            <p className="text-red-500">{error}</p>
                        )}
                    </div>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500" style={{ color: '#4a5568' }}>Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="border-2 border-gray-500 px-4 py-2 w-full"
                            style={{ borderRadius: '0.375rem' }}
                        />
                        {error && error.includes('Address') && (
                            <p className="text-red-500">{error}</p>
                        )}
                    </div>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500" style={{ color: '#4a5568' }}>Order Status</label>
                        <input
                            type="text"
                            value={status}
                            readOnly 
                            className="border-2 border-gray-500 px-4 py-2 w-full"
                            style={{ borderRadius: '0.375rem' }}
                        />
                    </div>
                    <button className="p-2 bg-sky-300 m-8" onClick={handleSaveTrack} style={{ backgroundColor: '#38b2ac', color: '#ffffff', borderRadius: '0.375rem' }}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTrack;