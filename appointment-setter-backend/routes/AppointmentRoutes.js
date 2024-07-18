import express from "express";
import { NewAppointmentModel } from "../models/NewAppointment.js";

export const appointmentsRouter = express.Router();

appointmentsRouter.post("/new", async (req, res) => {
    try {
        const appointment = new NewAppointmentModel(req.body);
        await appointment.validate();
        await appointment.save();
        res.status(201).send(appointment);
    } catch (error) {
        res.status(400).send({ message: error.message, errors: error.errors });
    }
});

appointmentsRouter.get("/all", async (req, res) => {
    try {
        const appointments = await NewAppointmentModel.find();
        res.status(200).send(appointments);
    } catch (error) {
        res.status(400).send({ message: error.message, errors: error.errors });
    }
});

appointmentsRouter.get("/:contactId/:id", async (req, res) => {
    try {
        const { contactId, id } = req.params;
        const query = { [contactId]: id };
        const appointments = await NewAppointmentModel.find(query);
        res.status(200).send(appointments);
    } catch (error) {
        res.status(400).send({ message: error.message, errors: error.errors });
    }
});

appointmentsRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    try {
        const appointment = await NewAppointmentModel.findByIdAndUpdate(
            id,
            update,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!appointment) {
            return res.status(404).send({ message: "Appointment not found" });
        }
        res.status(200).send(appointment);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});
