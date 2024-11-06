const BlogModel = require("../models/blogModel");

function getAllBlogPosts(req, res) {
    try {
        BlogModel.find({}).then(result => {
            if(result.length > 0){
                res.json(
                    {
                        "data": result,
                        "message": "",
                        "err": ""
                    }
                );
            } else {
                res.json(
                    {
                        "data": "",
                        "message": "No Blog Posts Found!",
                        "err": ""
                    }
                );
            }
        });        
    } catch (err) {
        res.json(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        );
    }
}

function getSpecificBlogPosts(req, res) {
    try {
        const title = req.query.title;
        BlogModel.find({"title": title}).then(result => {
            if(result.length > 0){
                res.json(
                    {
                        "data": result,
                        "message": "",
                        "err": ""
                    }
                );
            } else {
                res.json(
                    {
                        "data": "",
                        "message": "No Blog Posts Found!",
                        "err": ""
                    }
                );
            }
        });        
    } catch (err) {
        res.json(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        );
    }
}

function createBlogPost(req, res) {
    try {
        let obj = req.body;
        BlogModel.find({"title": obj.title}).then(async result => {
            if(result.length > 0) {
                res.json(
                    {
                        "data": "",
                        "message": "Blog Already Exists!",
                        "err": ""
                    }
                )
            } else {
                const blogPost = new BlogModel(obj);
                await blogPost.save();
                res.json(
                    {
                        "data": "",
                        "message": "Blog Created Successfully!",
                        "err": ""
                    }
                )
            }
        });

        
    } catch(err) {
        res.json(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        );
    }
}

function updateBlogPost(req, res) {
    res.send("Update blog post");
}

function deleteBlogPost(req, res) {
    res.send("Delete blog post");
}

module.exports = {
    getAllBlogPosts,
    getSpecificBlogPosts,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
}