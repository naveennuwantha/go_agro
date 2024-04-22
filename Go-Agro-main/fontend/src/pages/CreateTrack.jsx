import React, { useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTrack = () => {
    const [OrderId, setOrderId] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('Order Confirmed'); // Set initial status here
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveTrack = () => {
        const data = {
            OrderId,
            address,
            status,
        };
        setLoading(true);
        axios
            .post('http://localhost:5000/tracks', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please Check console');
                console.log(error);
            });
    };

    return (
        <div className="p-4">
            <BackButton/>
            <h1 className="text-3xl my">Create Track</h1>
            {loading ? <Spinner/> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Order Id</label>
                    <input
                        type="text"
                        value={OrderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        className="border-2 border-gray-500 px-4 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border-2 border-gray-500 px-4 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Order Status</label>
                    <input
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border-2 border-gray-500 px-4 w-full"
                        disabled // Prevent user from editing the status field
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleSaveTrack}>
                    Create Track
                </button>
            </div>
        </div>
    );
};

export default CreateTrack;
