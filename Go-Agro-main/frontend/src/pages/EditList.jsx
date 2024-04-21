import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import './EditList.css';

const EditList = () => {
    const [paddyType, setPaddyType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pricePer1kg, setPricePer1Kg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/lists/${id}`)
            .then((response) => {
                setPricePer1Kg(response.data.pricePer1kg);
                setQuantity(response.data.quantity);
                setPaddyType(response.data.paddyType);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            });
    }, [id])

    const handleEditList = () => {
        const data = {
            paddyType,
            quantity,
            pricePer1kg,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5000/lists/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('List edited successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='container'>

            <h1 className='heading'>Edit Details</h1>
            {loading ? <Spinner /> : ''}
            <div className='form-container '>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Paddy Type</label>
                    <input
                        type='text'
                        value={paddyType}
                        onChange={(e) => setPaddyType(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Quantity</label>
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price Per 1KG</label>
                    <input
                        type='number'
                        value={pricePer1kg}
                        onChange={(e) => setPricePer1Kg(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>

                <div className='button-container'>
                    <button onClick={handleEditList}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditList;
