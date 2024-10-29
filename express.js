const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const blog = require('./blogExpress');

app.get("/getAllBlogPosts", blog.readAllBlogPosts);

app.get("/getSpecificBlogPosts", blog.readSpecificBlogPost);

app.post("/createBlogPost", blog.createBlogPost);

app.put("/updateBlogPost", blog.updateBlogPost);

app.use("/*", (req, res) => {
    res.send("No routes match found!");
});

app.listen(4000, () => console.log('Server running on port : 4000'));