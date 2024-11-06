const express = require('express');
const app = express();
require('dotenv').config();

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

// Category Routes
// Likes Routes
// Author Routes

// default route
app.use("/*", (req, res) => {
    res.send("No Routes found!");
});

app.listen(port, () => console.log(`Server is listening on port : ${port}`));