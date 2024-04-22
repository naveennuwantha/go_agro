import { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import './DeleteList.css';

const DeleteList = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteList = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5000/lists/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('List deleted successfully', { variant: 'success' });
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

            <h1 className='heading'>Delete Product</h1>
            {loading ? <Spinner /> : ''}
            <div className='confirmation-box'>
                <h3 className='text-2xl'>Are You Sure You want to delete your product?</h3>

                <button
                    className='delete-button'
                    onClick={handleDeleteList}
                >
                    Yes, Delete it
                </button>
            </div>
        </div>
    )
}

export default DeleteList;