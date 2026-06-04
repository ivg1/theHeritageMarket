require("dotenv").config();
const port = process.env.PORT;

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

const db = require("./db/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const listingsRouter = require("./routes/listings");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/listings", listingsRouter);


app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
});

app.listen(port, async () => {
    console.log(`server running on http://localhost:${port}`);
    
});
