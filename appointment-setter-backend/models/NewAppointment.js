import mongoose from "mongoose";

const NewAppointmentSchema = mongoose.Schema({
    date: {
        type: String,
        required: [true, "Date is required"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    comments: {
        type: String,
        required: false,
    },
    contactId: {
        type: String,
        required: [true, "A contact id is required to book appointment"],
    },
    status: {
        type: String,
        required: [true, "Status is requied"],
    },
});

export const NewAppointmentModel = mongoose.model(
    "appointments",
    NewAppointmentSchema
);
