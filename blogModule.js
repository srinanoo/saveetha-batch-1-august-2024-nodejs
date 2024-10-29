const fs = require('fs');
const path = "./blog.json";

// create
function createBlogPost() {
    try {
        let obj = {
            "id": 3,
            "title": "Title 3",
            "description": "Description 3"
        }
        fs.readFile(path, "utf8", (err, data) => {
            if(err)
                console.log(err);
            else {
                let res = JSON.parse(data);
                // let flag = false;
                // for(let i = 0; i < res.length; i++) {
                //     if(res[i].title === obj.title) {
                //         flag = true;
                //         break;
                //     }
                // }
                // let flag = res.filter(v => v.title === obj.title);
                let flag = res.some(v => v.title === obj.title);
            
                if(flag) {
                    res.write(
                    {
                        "data": "",
                        "message": "Blog Title already exists!",
                        "err": ""
                    }
                    )
                    res.end();
                }
                else {
                    res.push(obj);
                    fs.writeFileSync(path, JSON.stringify(res));
                    res.write(
                        {
                            "data": "",
                            "message": "Blog Created Successfully!",
                            "err": ""
                        }
                    )
                    res.end();
                }
            }

        })

    } catch(err) {
        res.write(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        );
        res.end();
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
                    res.write(
                        JSON.stringify(
                        {
                            "data": result,
                            "message": "",
                            "err": ""
                        })
                    );
                    res.end();
                } else {
                    res.write(
                        JSON.stringify(
                        {
                            "data": "",
                            "message": "No Blog Posts Found!",
                            "err": ""
                        })
                    );
                    res.end();
                }
            }
        })
    } catch (err) {
        res.write(
            JSON.stringify(
            {
                "data": "",
                "message": "",
                "err": err.message
            })
        );
        res.end();
    }
}

// read Specific
function readSpecificBlogPost() {
    try {
        let title = "Blog 1sdfdsfsdfsdf";
        fs.readFile(path, "utf8", (err, data) => {
            let res = JSON.parse(data);
            if(err)
                console.log(err);
            else {
                if(res.length > 0) {
                    let results = res.filter(v => v.title === title);
                    if(results.length > 0) {
                        console.log(
                            JSON.stringify(
                            {
                                "data": results,
                                "message": "",
                                "err": ""
                            })
                        );
                    } else {
                        console.log(
                            {
                                "data": "",
                                "message": "No Blog Posts Found!",
                                "err": ""
                            }
                        );
                    }
                } else {
                    console.log(
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
        console.log(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        )
    }
}

// update blog post
function updateBlogPost() {
    try {
        let obj = {
            "id": 3,
            "description": "DESCRIPTION 3"
        };
        fs.readFile(path, "utf8", (err, data) => {
            let res = JSON.parse(data);
            if(err)
                console.log(err);
            else {
                if(res.length > 0) {
                    let i = res.findIndex(v => v.id === obj.id);
                    console.log(i);
                    res[i] = {...res[i], ...obj};
                    fs.writeFileSync(path, JSON.stringify(res));
                    console.log({
                        "data": "",
                        "message": "Blog Post Updated!",
                        "err": ""
                    })
                    // let results = res.filter(v => v.title === title);
                    // if(results.length > 0) {
                    //     console.log(
                    //         {
                    //             "data": results,
                    //             "message": "",
                    //             "err": ""
                    //         }
                    //     );
                    // } else {
                    //     console.log(
                    //         {
                    //             "data": "",
                    //             "message": "No Blog Posts Found!",
                    //             "err": ""
                    //         }
                    //     );
                    // }
                } else {
                    console.log(
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
        console.log(
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