import { useEffect, useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';


const CreateList = () => {
    const [PaddyType, setpaddyType] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [PricePer1Kg, set] = useState('');
    const [paddyType, setPaddyType] = useState('');


    return (
        <div>CreateList</div>
    )
}

export default CreateList