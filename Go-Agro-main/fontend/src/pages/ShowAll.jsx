import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import '../App.css';

const ShowAll = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/reviews')
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-8'>
      <div className='flex'>
        <Link
          to="/"
          className='bg-green-800 text-white px-4 py-1 rounded-lg w-fit absolute  left-4'
        >
          <BsArrowLeft className='text-2xl' />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md text-green-500 bg-green-100 p-2' style={{ width: '0.1%', fontSize: '18px' }}>ID</th>
              <th className='border border-slate-600 rounded-md text-green-500 bg-green-100 p-2' style={{ width: '3%', fontSize: '18px' }}>UserName</th>
              <th className='border border-slate-600 rounded-md text-green-500 bg-green-100 p-2' style={{ width: '3%', fontSize: '18px' }}>Name of order</th>
              <th className='border border-slate-600 rounded-md text-green-500 bg-green-100 p-2' style={{ width: '3%', fontSize: '18px' }}>Order Number</th>
              <th className='border border-slate-600 rounded-md text-green-500 bg-green-100 p-2' style={{ width: '3%', fontSize: '18px' }}>Review</th>
              <th className='border border-slate-600 rounded-md text-green-500 bg-green-100 p-2' style={{ width: '2.5%', fontSize: '18px' }}>Level of Rating(out of 5)</th>
              <th className='border border-slate-600 rounded-md text-green-500 bg-green-100 p-2' style={{ width: '3%', fontSize: '18px' }}>Published Date</th>
              <th className='border border-slate-600 rounded-md text-green-500 bg-green-100 p-2' style={{ width: '3%', fontSize: '18px' }}>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {reviews.map((review, index) => (

              <tr className='h-9'>
                <td className='border rounded-md text-center shadow-lg' style={{ fontSize: '14px' }}>
                  {index + 1}
                </td>
                <td className='border rounded-md text-center shadow-lg' style={{ fontSize: '14px' }}>
                  {review.buyername}
                </td>
                <td className='border rounded-md text-center shadow-lg' style={{ fontSize: '14px' }}>
                  {review.type}
                </td>
                <td className='border rounded-md text-center shadow-lg' style={{ fontSize: '14px' }}>
                  {review.ordernumber}
                </td>
                <td className='border rounded-md text-center shadow-lg' style={{ fontSize: '14px' }}>
                  {review.content}
                </td>
                <td className='border rounded-md text-center shadow-lg' style={{ fontSize: '14px' }}>
                  {review.rating}
                </td>
                <td className='border rounded-md text-center shadow-lg' style={{ fontSize: '14px' }}>
                  {review.publishDate}
                </td>
                <td className='border rounded-md text-center shadow-lg' style={{ fontSize: '14px' }}>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/reviews/details/${review._id}`} className="tooltip" title="View Details">
                      <BsInfoCircle className='text-xl text-green-800' />
                      <span className="tooltiptext-view">View Details</span>
                    </Link>
                    <Link to={`/reviews/edit/${review._id}`} className="tooltip" title="Edit Review">
                      <AiOutlineEdit className='text-xl text-yellow-600' />
                      <span className="tooltiptext-edit">Edit Review</span>
                    </Link>
                    <Link to={`/reviews/delete/${review._id}`} className="tooltip" title="Delete Review">
                      <MdOutlineDelete className='text-xl text-red-600' />
                      <span className="tooltiptext-delete">Delete Review</span>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>


        </table>
      )}
    </div>
  );
};

export default ShowAll;