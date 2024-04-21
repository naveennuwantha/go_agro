import express from 'express';
import {Review} from '../modle/reviewModel.js';
const router = express.Router();
import mongoose from 'mongoose';

const validateFields = (req,res,next) =>{
    const requiredFields = [
        "username",
        "content",
        "rating",
        "publishDate",
    ];
    for(const field of requiredFields){
        if (!req.body[field]) {
            return res
              .status(400)
              .send({ message: `Field '${field}' cannot be empty` });
    }
}
} 

//Route for create a new review
router.post('/',validateFields,async(request,response)=>{
    try{
        if(
            
            !request.body.username ||
            !request.body.content ||
            !request.body.rating ||
            !request.body.publishDate 
        ){
            return response.status(400).send({
                message: 'Send all required fields: username,content,date',
            });
        }
        const newReview={
           
            username:request.body.username,
            content:request.body.content,
            rating:request.body.rating,
            publishDate:request.body.publishDate,
        };

        const review = await Review.create(newReview);

        return response.status(201).send(review);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }

});

  // Route for retrieving a specific Vehicle by ID
 router.get('/:identifier', async (request, response) => {
    try {
        // Extracting the identifier from the request parameters
        const { identifier } = request.params;
  
        // Checking if the provided identifier is a valid MongoDB ObjectId
        if (mongoose.Types.ObjectId.isValid(identifier)) {
            // Fetching a vehicle from the database based on the ID
            const ReviewByID = await Review.findById(identifier);
            if (ReviewByID) {
                // Sending the fetched vehicle as a JSON response if found by ID
                return response.status(200).json(ReviewByID);
            }
        }
  
        // If the provided identifier is not a valid ObjectId, try searching by register number
        const ReviewByUSERNAME = await Review.find({ username: identifier });
        if (ReviewByUSERNAME) {
            // Sending the fetched vehicle as a JSON response if found by register number
            return response.status(200).json(ReviewByUSERNAME);
        }
  
        // If no vehicle found by either ID or register number, send a 404 Not Found response
        return response.status(404).json({ message: 'review not found' });
    } catch (error) {
        // Handling errors and sending an error response with detailed error message
        console.error(error);
        response.status(500).send({ message: 'Error fetching review: ' + error.message });
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
            !request.body.rating ||
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