import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
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
    <div className='p-4'>
      <div className='flex justify-center items-center '>
        <h1 className='text-3xl my-8 text-green-700'>Review List</h1>
        <Link to='/reviews/create'>
          <MdOutlineAddBox className='text-green-500 text-2xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md text-green-500'>ID</th>
              <th className='border border-slate-600 rounded-md text-green-500'>UserName</th>
              <th className='border border-slate-600 rounded-md text-green-500'>Review</th>
              <th className='border border-slate-600 rounded-md text-green-500'>level of Rating(out of 5)</th>
              <th className='border border-slate-600 rounded-md text-green-500'>Published Date</th>
              <th className='border border-slate-600 rounded-md text-green-500'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={reviews._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {review.username}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {review.content}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {review.rating}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {review.publishDate}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/reviews/details/${review._id}`} className="tooltip" title="View Details">
                      <BsInfoCircle className='text-xl text-green-800' />
                      <span className="tooltiptext">View Details</span>
                    </Link>
                    <Link to={`/reviews/edit/${review._id}`} className="tooltip" title="Edit Review">
                      <AiOutlineEdit className='text-xl text-yellow-600' />
                      <span className="tooltiptext">Edit Review</span>
                    </Link>
                    <Link to={`/reviews/delete/${review._id}`} className="tooltip" title="Delete Review">
                      <MdOutlineDelete className='text-xl text-red-600' />
                      <span className="tooltiptext">Delete Review</span>
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

