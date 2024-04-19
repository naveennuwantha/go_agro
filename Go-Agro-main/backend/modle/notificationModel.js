import mongoose from "mongoose";

const notificationSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
          },
        fullMsg:{
          type:String,
          required:true,
        },
        onClickPath: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now
        },
    }
)
 

export const Notification = mongoose.model("notification", notificationSchema);
