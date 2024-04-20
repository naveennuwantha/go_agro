import { useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

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


        axios.post('http://localhost:5000/lists',
            formData,

        )

            .then(() => {
                setLoading(false);
                enqueueSnackbar('List created successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='p-4 center'>

            <BackButton />
            <h1 className='text-3xl my-4 center'>Create List</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-green-600 rounded-x1 w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Paddy Type</label>
                    <input
                        type='text'
                        value={paddyType}
                        onChange={(e) => setPaddyType(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Quantity</label>
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price Per 1KG</label>
                    <input
                        type='number'
                        value={pricePer1kg}
                        onChange={(e) => setPricePer1Kg(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Upload Image Here</label>
                    <input
                        type='file'
                        onChange={(e) => setImage(e.target.files[0])}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-green-600 m-8' onClick={handleSaveList}>Save</button>
            </div>

        </div>
    );
};

export default CreateList;
