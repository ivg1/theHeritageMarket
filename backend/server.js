require("dotenv").config();
const port = process.env.PORT;

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

app.listen(port, async () => {
    console.log(`server running on http://localhost:${port}`);
    
});

const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const upload = multer({ storage: multer.memoryStorage() });

app.use("/uploads", express.static("uploads"));

app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const outputFile = Date.now() + "_" + (Math.floor(Math.random() * 10000)) + ".jpg";
        const outputPath = "uploads/" + outputFile;

        //compression
        await sharp(req.file.buffer)
            .resize({ width: 1440 })
            .jpeg({ quality: 80 })
            .toFile(outputPath);


        res.json({ image_url: `${process.env.SERVER_URL}/uploads/${outputFile}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "upload failed" });
    }
});

const db = require("./db/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const listingsRouter = require("./routes/listings");
const authRouter = require("./routes/auth");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/listings", listingsRouter);
app.use("/auth", authRouter);


app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
});
