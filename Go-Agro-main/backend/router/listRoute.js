import express from 'express';
import {List} from '../model/listModel.js';

const router = express.Router();

// Route for saving a new list
router.post('/',async(request,response)=>{
    try{
        if(
            
            !request.body.paddyType ||
            !request.body.quantity ||
            !request.body.pricePer1kg ||
            !request.body.dateAdded
        ){
            return response.status(400).send({
                message: 'Send all required fields: paddyType,quantity,pricePer1kg,dateAdded',
            });
        }
        const newList={
           
            paddyType:request.body.paddyType,
            quantity:request.body.quantity,
            pricePer1kg:request.body.pricePer1kg,
            dateAdded:request.body.dateAdded,
        };

        const list = await List.create(newList);

        return response.status(201).send(list);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }

});

// Route for getting all list items from the database
router.get('/',async(request,response)=>{
    try{
        const listings = await List.find({});

        return response.status(200).json(listings);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

// Route for getting a single list from database by ID
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const listings = await List.findById(id);

        return response.status(200).json(listings);
        
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// Route for updating a list
router.put('/:id',async(request,response)=>{
    try{
        if( 
            
            !request.body.paddyType ||
            !request.body.quantity ||
            !request.body.pricePer1kg ||
            !request.body.dateAdded
        ){
            return response.status(400).send({
                message: 'Send all required fields: paddyType,quantity,pricePer1kg,dateAdded',
            });
        }
        const {id} = request.params;

        const result = await List.findByIdAndUpdate(id,request.body);

        if(!result){
            return response.status(404).json({message:'List not found'});
        }

        return response.status(200).send({message:'List updated successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

// Route for deleting a list
router.delete('/:id',async(request,response)=>{
    try{
        const {id} = request.params;

        const result = await List.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message:'List not found'});
        }

        return response.status(200).send({message:'List deleted successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});
export default router;