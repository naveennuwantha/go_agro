import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
    const [list, setList] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5000/lists/${id}`)
            .then((response) => {
                setList(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);


    return (
        <div className='container'>

            <h1 className='heading'>Product Details</h1>
            {loading ? (
                <div className='spinner'></div>
            ) : (
                <div className='border-2 border-green-400 rounded-2xl w-fit p-4 center'>
                    {list.image && (
                        <div className="image-container">
                            <img src={`http://localhost:5000/${list.image}`} alt="Uploaded" className="image" />
                        </div>
                    )}
                    <div className='item'>
                        <span>Id :</span>
                        <span>{list._id}</span>
                    </div>
                    <div className='item'>
                        <span>Paddy Type :</span>
                        <span>{list.paddyType}</span>
                    </div>
                    <div className='item'>
                        <span>Quantity(Kg) :</span>
                        <span>{list.quantity}</span>
                    </div>
                    <div className='item'>
                        <span>Price Per 1KG(Rs) :</span>
                        <span>{list.pricePer1kg}</span>
                    </div>
                    <div className='item'>
                        <span>Create Time :</span>
                        <span>{new Date(list.createdAt).toString()}</span>
                    </div>
                    <div className='item'>
                        <span>Last Update Time :</span>
                        <span>{new Date(list.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowList;
