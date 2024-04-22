import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TracksCard from "../components/home/TracksCard";
import TracksTable from "../components/home/TracksTable";


const Home = () => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
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


    return (
        <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1"
            onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1"
          onClick={() => setShowType('card')}
        >
          Card
        </button>
          /</div>
            <div className="flex justify-betwen items-center">
                <h1 className="text-3xl my-8">Order Tracking List</h1>
                <Link to='/tracks/create'>
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
            </div>
            {loading ? <Spinner/> : showType === 'table' ?<TracksTable tracks={tracks}/> : (<TracksCard tracks = {tracks}/>)}
               
          
        </div>
    )
}
export default Home
