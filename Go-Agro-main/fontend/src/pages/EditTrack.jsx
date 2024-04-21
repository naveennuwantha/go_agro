
import React, { useContext, useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from "notistack";
import { StepperContext } from "./StepperContext";

const EditTrack = () => {
    const { statusIndex, setStatusIndex } = useContext(StepperContext); // Fix: Use StepperContext instead of StatusContext
    const statuses = ["Order Confirmed", "Ready to Deliver", "On the Way to Delivered", "Delivered"];

    const [OrderId, setOrderId] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/tracks/${id}`)
            .then((response) => {
                setOrderId(response.data.OrderId);
                setAddress(response.data.address);
                setStatusIndex(statuses.indexOf(response.data.status));
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            });
    }, [id]);

    const handleEditTrack = () => {
        const data = {
            OrderId,
            address,
            status: statuses[statusIndex],
        };
        setLoading(true);
        axios.put(`http://localhost:5555/tracks/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Track Edited successfully',{ variant: 'success'});
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.error('An error happened:', error);
                enqueueSnackbar('Error', { variant: 'error' });
            });
    };

    const handleDropdownChange = (e) => {
        setStatusIndex(statuses.indexOf(e.target.value));
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Edit Track</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Order ID</label>
                    <input
                        type="text"
                        value={OrderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Order Status</label>
                    <select
                        value={statuses[statusIndex]}
                        onChange={handleDropdownChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    >
                        {statuses.map((status, index) => (
                            <option key={index} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between">
                    <button className="p-2 bg-sky-300 m-2" onClick={handleEditTrack}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditTrack;
