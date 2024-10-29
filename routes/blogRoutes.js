const router = require('express').Router();

const BlogControllers = require('../controllers/blogControllers');

router.get("/getAllBlogPosts", BlogControllers.getAllBlogPosts);
router.get("/getSpecificBlogPosts", BlogControllers.getSpecificBlogPosts);
router.post("/createBlogPost", BlogControllers.createBlogPost);
router.put("/updateBlogPost", BlogControllers.updateBlogPost);
router.delete("/deleteBlogPost/:id", BlogControllers.deleteBlogPost);

module.exports = router;