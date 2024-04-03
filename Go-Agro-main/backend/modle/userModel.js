import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    notifcation: {
        type: Array,
        default: [],
      },
      seennotification: {
        type: Array,
        default: [],
      },

}
);

export const userModel = mongoose.model('users',userSchema);