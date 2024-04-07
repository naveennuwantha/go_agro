import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import '../App.css';

const ShowListings = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/listings`)
            .then((response) => {
                setListings(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>List of Available Rice</h1>
                <Link to='/listings/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>Index</th>
                            <th className='border border-slate-600 rounded-md'> Paddy Type</th>
                            <th className='border border-slate-600 rounded-md'>Quantity</th>
                            <th className='border border-slate-600 rounded-md'>Price Per 1KG</th>
                            <th className='border border-slate-600 rounded-md'>Date Added</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listings.map((list, index) => (
                            <tr key={list._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {list.paddyType}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {list.quantity}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {list.pricePer1kg}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {list.dateAdded}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/listings/details/${list._id}`} className="tooltip" title="View Details" >
                                            <BsInfoCircle className='text-xl text-green-800' />
                                            <span className="tooltiptext">View Details</span>
                                        </Link>
                                        <Link to={`/listings/edit/${list._id}`} className="tooltip" title="Edit List">
                                            <AiOutlineEdit className='text-xl text-yellow-600' />
                                            <span className="tooltiptext">Edit List</span>
                                        </Link>
                                        <Link to={`/listings/delete/${list._id}`} className="tooltip" title="Delete List">
                                            <MdOutlineDelete className='text-xl text-red-600' />
                                            <span className="tooltiptext">Delete List</span>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ShowListings;
