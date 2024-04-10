import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { getAll, search } from '../services/list';
import Search from '../components/Search/Search';


const ShowListings = () => {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const { searchTerm } = useParams();

    useEffect(() => {
        setLoading(true);
        const loadLists = searchTerm ? search(searchTerm) : getAll();

        loadLists
            .then((lists) => {
                setLists(lists);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        axios
            .get(`http://localhost:5000/lists`)
            .then((response) => {
                setLists(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [searchTerm]);

    return (
        <>
            <Search />
            <div className='p-4'>
                <div className='flex justify-center'>
                    <h1 className='text-3xl my-8 text-green-700'>List of available rice</h1>
                    <Link to='/lists/create'>
                        <MdOutlineAddBox className='text-green-500 text-2xl justify-center' />
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
                                <th className='border border-slate-600 rounded-md'>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lists.map((list, index) => (
                                <tr key={list._id} className='h-8'>
                                    <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                                    <td className='border border-slate-700 rounded-md text-center'>{list.paddyType}</td>
                                    <td className='border border-slate-700 rounded-md text-center'>{list.quantity}</td>
                                    <td className='border border-slate-700 rounded-md text-center'>{list.pricePer1kg}</td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        <div className='flex justify-center gap-x-4'>
                                            <Link to={`/lists/details/${list._id}`} className='tooltip' title='View Details'>
                                                <BsInfoCircle className='text-xl text-green-800' />
                                            </Link>
                                            <Link to={`/lists/edit/${list._id}`} className='tooltip' title='Edit List'>
                                                <AiOutlineEdit className='text-xl text-yellow-600' />
                                            </Link>
                                            <Link to={`/lists/delete/${list._id}`} className='tooltip' title='Delete List'>
                                                <MdOutlineDelete className='text-xl text-red-600' />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default ShowListings;
