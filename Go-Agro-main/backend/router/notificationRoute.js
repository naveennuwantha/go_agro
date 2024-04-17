import express from 'express';
import Notification from '../modle/notificationModel.js'; // Assuming Notification is the default export

const router = express.Router();

// Route to add a new notification
router.post('/notifications', async (req, res) => {
    try {
        if (!req.body.message || !req.body.onClickPath || !req.body.createdAt) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newNotification = {
            message: req.body.message,
            onClickPath: req.body.onClickPath,
            createdAt: req.body.createdAt,
        };

        const notification = await Notification.create(newNotification);

        return res.status(201).send(notification);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to get all notifications
router.get('/notifications', async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Route to delete a notification by ID
router.delete('/notifications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNotification = await Notification.findByIdAndDelete(id);
        if (!deletedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
