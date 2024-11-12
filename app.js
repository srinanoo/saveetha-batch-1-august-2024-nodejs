const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 4000;

const mongoose = require('mongoose');

// to accept JSON requests from the payload
app.use(express.json());
// to accept url-encoded requests from the payload
app.use(express.urlencoded({ extended: true }));

// Routes (API Endpoints)
// app.get("/", (req, res) => {
//     let qry = req.query; // query string
//     res.send(`Query String data: ${qry.id}, ${qry.name}`);
// });

// app.post("/", (req, res) => {
//     let qry = req.body; // from url-encoded
//     res.send(`URL Encoded data: ${qry.title}, ${qry.description}`);
// });

// app.put("/", (req, res) => {
//     let qry = req.body; // from JSON
//     res.send(`JSON data: ${qry.title}, ${qry.description}`);
// });

// app.delete("/getBlog/:title/:description", (req, res) => {
//     res.send(`PARAMS Data: ${req.params.title}, ${req.params.description}`);
// });

// DB Connection
// mongoose.connect("mongodb://localhost:27017/BlogManagement").then(() => {
//     console.log("MongoDB Connected...");
// });
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"));

// Blog Routes
const BlogRoutes = require('./routes/blogRoutes');
app.use("/api/v1/blog/", BlogRoutes);


const jwt = require('jsonwebtoken');

app.post("/api/v1/login/", (req, res) => {
    const token = jwt.sign(
        {"username": req.body.username}, 
        process.env.SECRET_KEY,
        { expiresIn: "1hr" }
    );
    // token format:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRpbmVzaCIsImlhdCI6MTczMTM4OTg3NH0.UB9flbfj_WtIiWFFvixJdZADgNrGZeXgsiQS3OEyV_M"
    res.json({"username": req.body.username, "token": token});
});

app.post("/api/v1/validate", (req, res) => {
    try {
        console.log(req.body);
        console.log(req.headers.authorization);
        let token = req.headers.authorization.split(" ")[1];
        let valid = jwt.verify(token, process.env.SECRET_KEY);
        console.log(valid);
        // let res = UserModel.find({username: valid.username});
        res.json({"message": "Token received"});
    } catch (err) {
        res.json({"message": "Invalid token"});
    }
});

// Category Routes
// Likes Routes
// Author Routes

// default route
app.use("/*", (req, res) => {
    res.send("No Routes found!");
});

app.listen(port, () => console.log(`Server is listening on port : ${port}`));