const express = require("express");
const noteinfo = require("./data/noteinfo");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API is Running"));

app.get("/api/noteinfo", (req, res) => {
    res.json(noteinfo)
})

app.get("/api/noteinfo/:id", (req, res) => {
    const note = noteinfo.find((n)=>n._id===req.params.id);
    res.send(note);
})

app.use('/api/users', userRoutes);

app.use(notFound); 
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

