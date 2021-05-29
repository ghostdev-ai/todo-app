const express = require("express");
const app = express();
const cors = require("cors");
const todos = require("./routes/todos");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/', todos);

app.listen(5000, () => {
    console.log(`server is listening on port 5000...`);
});