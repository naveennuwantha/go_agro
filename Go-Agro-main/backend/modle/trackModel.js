import { model,Schema} from 'mongoose';

export const UserSchema = new Schema(

);
export const UserModel = model('user',UserSchema);import mongoose from "mongoose";

// Custom validator function to check if the value is a string
const validateString = (value) => {
    return typeof value === 'string';
};

const TrackModel = mongoose.Schema(
    {
        OrderId:{
            type:String,
            required:[true, 'Order ID is required'],
            unique:true,
            maxlength:[4,"OrderId must not have more than 4 characters"],
            validate: [validateString, 'Order ID must be a string'] // Add custom validator for string type
        },
        address:{
            type:String,
            required:[true, 'Address is required'],
        },
        status:{
            type:String,
            enum: ['Order Confirmed', 'Ready to Deliver', 'On the Way to Delivered', 'Delivered'],
            required:[true, 'Status is required'],
        }
    },
    {
        timestamps:true,
    }
);

export const Track = mongoose.model('tracks',TrackModel);
