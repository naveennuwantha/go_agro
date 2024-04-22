import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
        .get("http://localhost:5000/tracks")
        .then((response) => {
        setTracks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
   

    return(
        <div className="p-4">
        <div className="flex justify-betwen items-center">
            <h1 className="text-3xl my-8">Tracks List</h1>
            <Link to='/tracks/create'>
                <MdOutlineAddBox className="text-sky-800 text-4xl"/>
            </Link>
            </div>
            {loading ?(
                <Spinner/>
            ) : (
                <table className="w-full border-separate border-spacing-2">
                    <thead>
                    <tr>
                    <th className="border border-slate-600 rounded-md">No</th>
                    <th className="border border-slate-600 rounded-md">Order ID</th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">Address</th>
                    <th className="border border-slate-600 rounded-md">Status</th>
                    <th className="border border-slate-600 rounded-md">Operations</th>

      </tr>

                    </thead>
                    <tbody>
                    {tracks.map((track, index) => (
        <tr key={track._id} className='h-8'>
          <td className="border border-slate-700 rounded-md text-center">
            {index + 1}
          </td>
          <td className="border border-slate-700 rounded-md text-center">
            {track.OrderId}
          </td>
          <td className="border border-slate-700 rounded-md text-center">
            {track.address}
          </td>
          <td className="border border-slate-700 rounded-md text-center">
            {track.status}
          </td>
         
          <td className="border border-slate-700 rounded-md text-center">
            <div className="flex justify-center gap-x-4">
              <Link to={`/tracks/details/${track._id}`}>
                <BsInfoCircle className="text-2xl text-green-800" />
              </Link>
              <Link to={`/tracks/Edit/${track._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-800" />
              </Link>
              <Link to={`/tracks/delete/${track._id}`}>
                <MdOutlineDelete className="text-2xl text-red-800" />
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
export default Home
