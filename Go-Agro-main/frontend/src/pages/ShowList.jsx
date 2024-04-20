import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowList = () => {
    const [list, setList] = useState({});
    const [loading, setloading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setloading(true);
        axios
            .get(`http://localhost:5000/lists/${id}`)
            .then((response) => {
                setList(response.data);
                setloading(false);
            })
            .catch((error) => {
                console.log(error);
                setloading(false);

            });

    }, [id])
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Product Details</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-green-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        {list.image && <img src={`http://localhost:5000/${list.image}`} alt="List Image" />}
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{list._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Paddy Type</span>
                        <span>{list.paddyType}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Quantity(Kg)</span>
                        <span>{list.quantity}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Price Per 1KG(Rs)</span>
                        <span>{list.pricePer1kg}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                        <span>{new Date(list.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                        <span>{new Date(list.updatedAt).toString()}</span>
                    </div>

                </div>

            )}
        </div>
    )
}

export default ShowList;