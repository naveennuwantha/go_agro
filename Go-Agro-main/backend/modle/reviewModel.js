import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        
        username:{
            type:String,
            required : true,
        },
        content:{
            type:String,
            required : true,
        },
        publishDate:{
            type:String,
            required : true,
        },
        rating: {
            type: Number,
            min: 1, // Minimum rating value
            max: 5, // Maximum rating value
            required: true
        },
    },
    {
        timestamps:true,
    }
);

export const Review = mongoose.model('review',reviewSchema);