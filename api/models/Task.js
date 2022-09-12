import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    TaskName: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Duration: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model("Task", TaskSchema)