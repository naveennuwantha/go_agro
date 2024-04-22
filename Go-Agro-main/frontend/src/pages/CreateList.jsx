import { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import './CreateList.css';

const CreateList = () => {
    const [paddyType, setPaddyType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pricePer1kg, setPricePer1Kg] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveList = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('paddyType', paddyType);
        formData.append('quantity', quantity);
        formData.append('pricePer1kg', pricePer1kg);
        formData.append('image', image);


        axios.post('http://localhost:5000/lists', formData)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('List created successfully', { variant: 'success' });
                navigate('/lists/show');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='container'>
            <h1 className='heading'>Create List</h1>
            {loading ? <Spinner /> : ''}
            <div className='form-container'>
                <div className='my-4'>
                    <label>Paddy Type</label>
                    <input
                        type='text'
                        value={paddyType}
                        onChange={(e) => setPaddyType(e.target.value)}

                    />
                </div>
                <div className='my-4'>
                    <label>Quantity</label>
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}

                    />
                </div>
                <div className='my-4'>
                    <label>Price Per 1KG</label>
                    <input
                        type='number'
                        value={pricePer1kg}
                        onChange={(e) => setPricePer1Kg(e.target.value)}

                    />
                </div>
                <div className='my-4'>
                    <label>Upload Image Here</label>
                    <input

                        type='file'
                        onChange={(e) => setImage(e.target.files[0])}

                    />
                </div>

                <div className='button-container'>
                    <button onClick={handleSaveList}>Save</button>
                </div>
            </div>

        </div>
    );
};

export default CreateList;
