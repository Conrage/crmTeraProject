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
        default: "normal"
    },
    "status": {
        type: String,
        default: "inprogress"
    },
    "created": {
        type: Date,
        default: Date.now
    }
})

const ticket = mongoose.model('tickets', ticketSchema)

export default ticket;