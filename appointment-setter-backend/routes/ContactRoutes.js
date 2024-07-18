import express from "express";
import { NewContactModel } from "../models/NewContact.js";

export const contactsRouter = express.Router();

contactsRouter.get("/all", async (req, res) => {
    try {
        const contacts = await NewContactModel.find();
        res.status(200).send(contacts);
    } catch (error) {
        console.error("Error fetching contacts : ", error);
        res.status(400).send({ message: error.message, errors: error.errors });
    }
});

contactsRouter.get("/:key/:value", async (req, res) => {
    try {
        const { key, value } = req.params;
        const query = { [key]: value };
        const contacts = await NewContactModel.find(query);
        res.status(200).send(contacts);
    } catch (error) {
        res.status(400).send({ message: error.message, errors: error.errors });
    }
});

contactsRouter.post("/new", async (req, res) => {
    try {
        const contact = new NewContactModel(req.body);
        await contact.validate();
        await contact.save();
        res.status(201).send(contact);
    } catch (error) {
        res.status(400).send({ message: error.message, errors: error.errors });
    }
});

contactsRouter.post("/new-many", async (req, res) => {
    try {
        const contacts = req.body;
        await Promise.all(
            contacts.map(async (element) => {
                const contact = new NewContactModel(element);
                await contact.validate();
                await contact.save();
            })
        );

        res.status(201).send({
            message: "Contacts added correctly",
            contacts: contacts,
        });
    } catch (error) {
        console.error("Error posting contacts");
    }
});

contactsRouter.delete("/:id", async (req, res) => {
    try {
        const contact = await NewContactModel.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message, errors: error.errors });
    }
});
