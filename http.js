const http = require('http');
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    // res.write(req.method + " - " + req.url);
    // res.end();
    // query string
        // let qry = url.parse(req.url, true).query;
        // console.log(qry.id, qry.title);

    // post as object (url-encoded)
        // let data = "";
        // req.on('data', (chunks) => {
        //     // console.log(chunks);
        //     data += chunks;
        // });
        // req.on('end', () => {
        //     // console.log(data);
        //     let obj = qs.parse(data);
        //     console.log(obj.title, obj.description);
        // });

    // post for JSON
        // let data = "";
        // req.on('data', (chunks) => {
        //     // console.log(chunks);
        //     data += chunks;
        // });
        // req.on('end', () => {
        //     // console.log(data);
        //     let obj = JSON.parse(data);
        //     console.log(obj.title, obj.description);
        // });
    // res.write("Node Server started....");
    // res.end();

    const {readAllBlogPosts, readSpecificBlogPost, createBlogPost, updateBlogPost, deleteBlogPost} = require('./blogModule');

    const method = req.method;
    const url = req.url;
    if(method === 'GET' && url.indexOf('getAllBlogPosts') !== -1) {
        readAllBlogPosts(req, res);
        // res.write("Get All Blog Posts");
        // res.end();
    } else if(method === 'GET' && url.indexOf('getSpecificBlogPosts') !== -1) {
        res.write("Get Specific Blog Posts");
        res.end();
    } else if(method === 'POST' && url.indexOf('createBlogPost') !== -1) {
        res.write("Create Blog Post");
        res.end();
    } else if(method === 'PUT' && url.indexOf('updateBlogPost') !== -1) {
        res.write("Update Blog Post");
        res.end();
    } else if(method === 'DELETE' && url.indexOf('deleteBlogPost') !== -1) {
        res.write("Delete Blog Post");
        res.end();
    } else {
        res.write("NO Routes match found!");
        res.end();
    }
}).listen(4000, () => console.log("Server has started in port: 4000"));