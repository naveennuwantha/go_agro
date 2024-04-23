import React, { useEffect, useState , useRef} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TracksCard from "../components/home/TracksCard";
import TracksTable from "../components/home/TracksTable";
import { useReactToPrint } from "react-to-print";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from "react-bootstrap";


const Home = () => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'TrackDelivery-data',
      onAfterPrint: ()=> alert('Print success')
    });
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
      <>
      <div ref={componentRef} style={{width: '100%', height:window.innerHeight}}>
      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full1"
            onClick={() => setCreateType('table')}
          >
            Table
          </button>
          <button
            className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full1"
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
        {loading ? <Spinner /> : showType === 'table' ? <TracksTable tracks={tracks} /> : <TracksCard tracks={tracks} />}
  
      </div>
      </div>
      <div className="flex justify-center mt-4"> {/* Container to center the button */}
      <button
    className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
    onClick={handlePrint}
  >
    Print this out
  </button>
  
    
      </div>
      </>
    );
  }
export default Home
