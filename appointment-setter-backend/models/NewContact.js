import mongoose from "mongoose";

const NewContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    cellPhone: {
        type: Number,
        required: [true, "Cell Phone Number is required"],
    },
    landLine: {
        type: Number,
        required: false,
    },
});

export const NewContactModel = mongoose.model("contacts", NewContactSchema);
