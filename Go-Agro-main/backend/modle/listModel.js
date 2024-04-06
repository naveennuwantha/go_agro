import mongoose from "mongoose";

const listSchema = mongoose.Schema(
    {
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
    dateAdded:{
        type: Date,
        required: true,
},

},

);

export const List = mongoose.model('listings',listSchema);