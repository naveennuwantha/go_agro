import mongoose from "mongoose";

const notificationSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
          },
        onClickPath: {
            type: String,
            required: true,
          },
          createdAt: {
            type: String,
            required: true,
          },
    }
)
 

export const notificationModel = mongoose.model("notification", notificationSchema);
