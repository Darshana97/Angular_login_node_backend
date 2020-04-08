import { model, Schema } from "mongoose";

const newSchema = new Schema({

    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true }

}, { timestamps: true });


export default model("user", newSchema);

