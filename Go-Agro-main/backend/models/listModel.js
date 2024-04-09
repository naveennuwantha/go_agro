import mongoose from "mongoose";

const { Schema, model } = mongoose;

const listSchema = new Schema(
    {
        paddyType: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        pricePer1kg: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const List = model('List', listSchema);

export default List;