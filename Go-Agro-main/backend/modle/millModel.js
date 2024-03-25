import mongoose from "mongoose";

const millSchema = mongoose.Schema({
    paddyType:{
        type: String,
        required: true,
    },
    quantity:{
        type: String,
        required: true,
    },
    pricePer1kg:{
        type: String,
        required: true,
    },

});

export const Mill = mongoose.model('mills',millSchema);