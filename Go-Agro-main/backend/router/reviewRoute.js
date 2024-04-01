import express from 'express';
import {Review} from '../models/reviewModel.js';
const router = express.Router();

//Route for save a new review
router.post('/',async(request,response)=>{
    try{
        if(
            
            !request.body.username ||
            !request.body.content ||
            !request.body.publishDate 
        ){
            return response.status(400).send({
                message: 'Send all required fields: username,content,date',
            });
        }
        const newReview={
           
            username:request.body.username,
            content:request.body.content,
            publishDate:request.body.publishDate,
        };

        const review = await Review.create(newReview);

        return response.status(201).send(review);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }

});

//Route for Get All reviews from database
router.get('/',async(request,response)=>{
    try{
        const reviews = await Review.find({});

        return response.status(200).json(reviews);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route for Get one review from database by id
router.get('/:id',async(request,response)=>{
    try{
        const {id} = request.params;

        const reviews = await Review.findById(id);

        return response.status(200).json(reviews);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route for update review
router.put('/:id',async(request,response)=>{
    try{
        if(
            
            !request.body.username ||
            !request.body.content ||
            !request.body.publishDate 
        ){
            return response.status(400).send({
                message: 'Send all required fields: username,content,publishDate',
            });
        }
        const {id} = request.params;

        const result = await Review.findByIdAndUpdate(id,request.body);

        if(!result){
            return response.status(404).json({message:'Review not found'});
        }

        return response.status(200).send({message:'Review updated successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route for Delete a review
router.delete('/:id',async(request,response)=>{
    try{
        const {id} = request.params;

        const result = await Review.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message:'Review not found'});
        }

        return response.status(200).send({message:'Review deleted successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

export default router;