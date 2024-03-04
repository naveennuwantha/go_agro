import express from 'express'
import Farmer from '../modle/Farmer.js'


const route = express.Router()

router.post('/', async (req, res) =>{

    try {
        
        if(
            !req.body.id ||
            !req.body.name ||
            !req.body.email ||
            !req.body.photo ||
            !req.body.description 
        ){
            return res.status(400).send({message: 'Missing required'})
        }

        const newComplaint  ={
            id : req.body.id,
            name: req.body.name,
            email:req.body.email,
            photo:req.body.photo,
            description:req.body.description,
        }

        const complaint = await Complait.create(newComplaint);
        res.status(201).send({ message: 'complaint created successfull', complaint });
        
    } 
    catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }

})








export default route