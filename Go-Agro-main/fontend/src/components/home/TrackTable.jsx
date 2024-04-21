import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const TrackTable = ({tracks}) => {
  return (
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
   
  )
}

export default TrackTable
