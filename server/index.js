const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const {getFortune} = require('./controller')

app.get("/api/fortune", getFortune)

const inventory = [
    "Affirmations",
    "Tounge twisters",
    "Meditation",
    "Vocal warmup",
    "Vision board",
    "Goal list",
    "To-do list",
    "Exercise",
];

app.get("/api/inventory/:options", (req, res) => {
    console.log(req.params)
    res.status(200).send(inventory[+req.params.index]);
});

app.listen(4000, () => console.log("Server running on 4000"));
