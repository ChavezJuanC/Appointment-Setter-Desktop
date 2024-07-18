import express from "express";
import { contactsRouter } from "./routes/ContactRoutes.js";
import { appointmentsRouter } from "./routes/AppointmentRoutes.js";
import mongoose from "mongoose";
import cors from "cors";

const port = 7000; //replace with env
const app = express();

// Mongoose DB //
const mongoURI =
    ""; //replace with env

mongoose.connect(mongoURI);

// Connection events
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB successfully");
});

mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

// middleware //
app.use((req, res, next) => {
    console.log(`Method ${req.method} : ${req.path}`);
    next();
});

app.use(cors());
// json //
app.use(express.json());

// routes //

app.use("/contacts", contactsRouter);
app.use("/appointments", appointmentsRouter);

app.get("/ping", (req, res) => {
    res.json({
        ping: "pong",
    });
});

// starting up server //
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
