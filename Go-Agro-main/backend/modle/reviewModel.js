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
    },
    {
        timestamps:true,
    }
);

export const Review = mongoose.model('review',reviewSchema);