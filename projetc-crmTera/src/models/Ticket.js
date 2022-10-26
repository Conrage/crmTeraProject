import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
{
    "client": {
        type: String,
        required: true
    },
    "assigned": {
        type: String,
        required: true
    },
    "issue": {
        type: String,
    },
    "priority": {
        type: String,
        default: "Normal"
    },
    "status": {
        type: String,
        default: "In progress"
    },
    "created": {
        type: Date,
        default: Date.now
    }
})

const ticket = mongoose.model('tickets', ticketSchema)

export default ticket;