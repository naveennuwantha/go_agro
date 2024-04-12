import express from 'express';
import List from '../models/listModel.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Define the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep the original filename
    }
});

const upload = multer({ storage: storage }); 

// Route for saving a new list
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { paddyType, quantity, pricePer1kg } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: 'No image provided' });
        }

        const newList = new List({
            paddyType,
            quantity,
            pricePer1kg,
            image : {
                data: req.file.buffer,
                contentType: req.file.mimetype
            },

        });

        await newList.save();
        return res.json({ message: "List created" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
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
            !request.body.pricePer1kg||
            !request.body.image
            
        ){
            return response.status(400).send({
                message: 'Send all required fields: paddyType,quantity,pricePer1kg,image',
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