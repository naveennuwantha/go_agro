import { FaLocationDot } from "react-icons/fa6";
import { GrDeliver, GrCompliance } from "react-icons/gr";
import { Link } from 'react-router-dom';
import './Dashboard.css'

const MillOwner = () => {
    return (
        <div>

            <div className='mt-20 text-center'>
                <div className='inline-flex'>
                    <h1 className='t1 text-5xl font-serif' style={{ fontFamily: 'cursive' }}>Welcome </h1>
                    <h1 className='t2 text-6xl font-bold ml-5' style={{ fontFamily: 'serif' }}>.</h1>
                </div>
                <p className='text-3xl mt-5' style={{ fontFamily: "initial" }}> As A Mill Owner </p>
            </div>
            <div className='bn ml-14 mt-20 grid grid-cols-4 grid-rows-2 gap-y-6'>
                <button className='w-56 h-32 mr-10' style={{ background: '#1A4133' }}>
                    <div className='flex inline-block'>
                        <h1 className='ml-9'>Tracking</h1>
                        <FaLocationDot className='ml-5 size-9' />
                    </div>
                </button>
                <button className='w-56 h-32 mr-10' style={{ background: '#1A4133' }}>
                    <div className='flex inline-block'>
                        <h1 className='ml-9'>Order</h1>
                        <GrDeliver className='ml-5 size-9' />
                    </div>
                </button>
                <Link to={`/mycomplaints`}>
                    <button className='w-56 h-32 mr-10' style={{ background: '#1A4133' }}>
                        <div className='flex inline-block'>
                            <h1 className='ml-9'>Complaints</h1>
                            <GrCompliance className='ml-5 size-9' />
                        </div>
                    </button>
                </Link>
                <button className='w-56 h-32 mr-10' style={{ background: '#1A4133' }}>
                    <div className='flex inline-block'>
                        <h1 className='ml-9'>Add Paddy</h1>
                        <GrDeliver className='ml-5 size-9' />
                    </div>
                </button>
                <button className='w-56 h-32 mr-10' style={{ background: '#1A4133' }}>
                    <div className='flex inline-block'>
                        <h1 className='ml-9'>For Farmer</h1>
                    </div>
                </button>
                <button className='w-56 h-32 mr-10' style={{ background: '#1A4133' }}>
                    <div className='flex inline-block '>
                        <h1 className='ml-4'>For Shop Owner</h1>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default MillOwner;

