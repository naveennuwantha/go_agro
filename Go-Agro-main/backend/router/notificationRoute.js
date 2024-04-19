import express from 'express';
import {Notification} from '../modle/notificationModel.js'; // Assuming Notification is the default export
const router = express.Router();

//Route for save a new notification
router.post('/',async(req,res)=>{
    try{
        if(
            
            !req.body.message ||
            !req.body.onClickPath 
             
        ){
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newNotification={
           
            message:req.body.message,
            onClickPath:req.body.onClickPath,
            
        };

        const notification = await Notification.create(newNotification);

        return res.status(201).send(notification);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }

});

// Route to get all notifications from db
router.get('/', async (req, res) => {
    try {
        const notifications = await Notification.find({});

        return res.status(200).json(notifications);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Route to delete a notification by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Notification.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
