const router = require('express').Router();

router.get("/getAllBlogPosts", (req, res) => {
    res.send("Get all blog posts");
});
router.get("/getSpecificBlogPosts", (req, res) => {
    res.send("Get specific blog posts");
});
router.post("/createBlogPost", (req, res) => {
    res.send("Create new blog post");
});
router.put("/updateBlogPost", (req, res) => {
    res.send("Update blog post");
});
router.delete("/deleteBlogPost/:id", (req, res) => {
    res.send("Delete blog post");
});

module.exports = router;