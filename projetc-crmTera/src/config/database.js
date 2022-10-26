import mongoose from "mongoose";

//mongoose.connect("mongodb://localhost:27017/crm-tera")
mongoose.connect("mongodb+srv://FilipeCampos:CRMTera@cluster0.hj0tlv5.mongodb.net/crm-tera?retryWrites=true&w=majority")

const db = mongoose.connection;

export default db;

