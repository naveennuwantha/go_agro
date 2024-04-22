import express from 'express';
import Order from '../models/orderModel.js';

const router = express.Router();

// Route for creating a new order
router.post('/', async (req, res) => {
    try {
        const requiredFields = [ 'buyername', 'sellername','type', 'quantity', 'price'];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).send({
                    message: `Field '${field}' is required.`,
                });
            }
        }

        const newOrder = req.body;
        const order = await Order.create(newOrder);

        return res.status(201).json(order);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

// Route for getting all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({});
        return res.status(200).json({
            count: orders.length,
            data: orders
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

// Route for getting a single order by ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).send({ message: "Order not found" });
        }
        return res.status(200).json(order);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

// Route for updating an order
router.put('/:id', async (req, res) => {
    try {
        const result = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) {
            return res.status(404).send({ message: "Order not found" });
        }
        return res.status(200).json({
            message: 'Order updated successfully',
            updatedOrder: result
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

// Route for deleting an order
router.delete('/:id', async (req, res) => {
    try {
        const result = await Order.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).send({ message: "Order not found" });
        }
        return res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }
});




export default router;
