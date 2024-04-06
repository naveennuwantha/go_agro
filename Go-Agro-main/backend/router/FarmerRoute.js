import express from 'express'
import Farmer from '../models/Farmer.js'



const router = express.Router()

router.post('/', async (req, res) =>{

    try {
        
        if(
            !req.body.name ||
            !req.body.NIC ||
            !req.body.phone ||
            !req.body.email ||
            !req.body.password || 
            !req.body.address ||
            !req.body.role ||
            !req.body.about 


        ){
            return res.status(400).send({message: 'Missing required'})
        }

        const newFarmer  ={
            name : req.body.name,
            NIC: req.body.NIC,
            phone:req.body.phone,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address,
            role:req.body.role,
            about:req.body.about
        }

        const farmer = await Farmer.create(newFarmer);
        res.status(201).send({ message: 'farmer created successfull', farmer });
        
    } 
    catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }

})

router.get('/', async(req,res)=>{ // view all farmers

    try{

        const farmers = await Farmer.find({})

        return res.status(200).json({
            
            data: farmers
        })

    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
}) 

router.get('/:id', async(req,res)=>{ // view one farmer

    try{

        const {id} = req.params;
        const farmer = await Farmer.findById(id)

        return res.status(200).json({
            
            data: farmer
        })

    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
}) 

router.put('/:id', async(req, res)=>{ // update farmer

    try {

        if (
            !req.body.name ||
            !req.body.NIC ||
            !req.body.phone ||
            !req.body.email ||
            !req.body.address ||
            !req.body.about 

        ) {
            return res.status(400).send({ message: 'Missing required fields' });
        }

        const {id} = req.params;
        const result = await Farmer.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).json({message: 'complaint not found'})
        }

        return res.status(200).send({message: 'complaint update successfully'})
        
    } catch (error) {

        console.log(error.message)
        res.status(500).send({message: error.message})
        
    }
})

router.delete('/:id', async(req,res)=>{ // view one farmer

    try{

        const {id} = req.params;
        const result = await Farmer.findByIdAndDelete(id)

        if(!result){
            return res.status(404).send({message:'complaint not found'})
        }

        return res.status(200).send({message: "compalaint deleted successfuly"})

        
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
}) 


export default router