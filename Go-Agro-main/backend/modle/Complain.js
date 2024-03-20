import mongoose from "mongoose";


const ComplaintSchema = new mongoose.Schema({

    id:{type:String },
    name:{type:String , required: true},
    email:{type: String ,  required : true},
    photo:{type:String },
    description:{type:String}

})



export default mongoose.model("Complaint", ComplaintSchema);