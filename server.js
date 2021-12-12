const express = require("express");
const noteinfo = require("./data/noteinfo")

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API is Running"));

app.get("/api/noteinfo", (req, res) => {
    res.json(noteinfo)
})

app.get("/api/noteinfo/:id", (req, res) => {
    const note = noteinfo.find((n)=>n._id===req.params.id);
    res.send(note);
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

