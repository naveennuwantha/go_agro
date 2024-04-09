import { useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';


const CreateList = () => {
    const [paddyType, setPaddyType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pricePer1kg, setPricePer1Kg] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveMill = () => {
        const data = {
            paddyType,
            quantity,
            pricePer1kg
        };
        setLoading(true);
        axios
            .post('http://localhost:5000/lists', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create List</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-green-600 rounded-x1 w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <lable className='text-xl mr-4 text-gray-500'>Paddy Type</lable>
                    <input
                        type='text'
                        value={paddyType}
                        onChange={(e) => setPaddyType(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <lable className='text-xl mr-4 text-gray-500'>Quantity</lable>
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <lable className='text-xl mr-4 text-gray-500'>Price Per 1KG</lable>
                    <input
                        type='number'
                        value={pricePer1kg}
                        onChange={(e) => setPricePer1Kg(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <button className='p-2 bg-green-600 m-8' onClick={handleSaveMill}>Save</button>
            </div>
        </div>
    )
}

export default CreateList;