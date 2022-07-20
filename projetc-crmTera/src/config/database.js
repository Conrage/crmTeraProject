import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/crm-tera")

const db = mongoose.connection;

export default db;

