import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
    {
        buyername: {
            type: String,
            required: true,
        },
        sellername: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Order', orderSchema);
