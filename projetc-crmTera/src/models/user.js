import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "birth": {
        type: Date,
        required: true
    },
    "cpf":{
        type: String,
        required: true,
    },
    "tel": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true,
        select: false
    }
})


userSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

const User = mongoose.model('users', userSchema);

export default User;