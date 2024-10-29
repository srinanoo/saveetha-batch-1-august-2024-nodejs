const fs = require('fs');
const path = "./blog.json";

// create
function createBlogPost(req, res) {
    try {
        let obj = req.body;
        fs.readFile(path, "utf8", (err, data) => {
            if(err)
                console.log(err);
            else {
                let result = JSON.parse(data);
                let flag = result.some(v => v.title === obj.title);
            
                if(flag) {
                    res.json(
                        {
                            "data": "",
                            "message": "Blog Title already exists!",
                            "err": ""
                        }
                    )
                }
                else {
                    result.push(obj);
                    fs.writeFileSync(path, JSON.stringify(result));
                    res.json(
                        {
                            "data": "",
                            "message": "Blog Created Successfully!",
                            "err": ""
                        }
                    )
                }
            }

        })

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

// readAll
function readAllBlogPosts(req, res) {
    try {
        fs.readFile(path, "utf8", (err, data) => {
            let result = JSON.parse(data);
            if(err)
                console.log(err);
            else {
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
            }
        })
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

// read Specific
function readSpecificBlogPost(req, res) {
    try {
        let title = req.query.title;
        fs.readFile(path, "utf8", (err, data) => {
            let result = JSON.parse(data);
            if(err)
                console.log(err);
            else {
                if(result.length > 0) {
                    let temp = result.filter(v => v.title === title);
                    if(temp.length > 0) {
                        res.json(
                            {
                                "data": temp,
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
                } else {
                    res.json(
                        {
                            "data": "",
                            "message": "No Blog Posts Found!",
                            "err": ""
                        }
                    );
                }
            }
        });
    } catch (err) {
        res.json(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        )
    }
}

// update blog post
function updateBlogPost(req, res) {
    try {
        let obj = req.body;
        fs.readFile(path, "utf8", (err, data) => {
            let result = JSON.parse(data);
            if(err)
                console.log(err);
            else {
                if(result.length > 0) {
                    let i = result.findIndex(v => v.id == obj.id);
                    console.log(i);
                    result[i] = {...result[i], ...obj};
                    fs.writeFileSync(path, JSON.stringify(result));
                    res.json({
                        "data": "",
                        "message": "Blog Post Updated!",
                        "err": ""
                    })
                } else {
                    res.json(
                        {
                            "data": "",
                            "message": "No Blog Posts Found!",
                            "err": ""
                        }
                    );
                }
            }
        });
    } catch (err) {
        res.json(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        )
    }
}

// delete blog post
function deleteBlogPost() {
    try {
        let id = 3;
        fs.readFile(path, "utf8", (err, data) => {
            let res = JSON.parse(data);
            let results = res.filter(v => v.id !== id);
            if(results.length < res.length) {
                fs.writeFileSync(path, JSON.stringify(results));
                console.log(
                    {
                        "data": "",
                        "message": "Blog Post deleted successfully!",
                        "err": ""
                    }
                )
            } else {
                console.log(
                    {
                        "data": "",
                        "message": "No Blog Post Found!",
                        "err": ""
                    }
                )
            }
        });
    } catch (err) {
        console.log(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        )
    }
}

module.exports = {
    createBlogPost,
    readAllBlogPosts,
    readSpecificBlogPost,
    updateBlogPost,
    deleteBlogPost
}