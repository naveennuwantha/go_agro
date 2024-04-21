import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TrackCard from "../components/home/TrackCard";
import TrackTable from "../components/home/TrackTable";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createType, setCreateType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/tracks")
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
          onClick={() => setCreateType('table')}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1"
          onClick={() => setCreateType('card')}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl my-8">Order Tracking List</h2>
        <Link to="/tracks/Create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> : createType === 'table' ? <TrackTable tracks={tracks} /> : <TrackCard tracks={tracks} />}
    </div>
  );
};

export default Home;
