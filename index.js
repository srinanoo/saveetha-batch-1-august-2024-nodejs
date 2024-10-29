// import os from 'os'; // Module ES Standard
// const os = require('os'); // Common JS Standard
// // console.log(os);
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.totalmem());

const fs = require('fs'); // File System Module
// import fs from 'fs'; // Module ES Standard
// C= create file, R= read file, U= update file, D= delete file
// CREATE or UPDATE
    // fs.writeFileSync
    // fs.writeFile
// READ
    // fs.readFileSync
    // fs.readFile
// APPEND
    // fs.appendFileSync
    // fs.appendFile
// DELETE
    // fs.unlinkSync
    // fs.unlink

// create a empty JSON file with [] array as data (CRUD)
    // concept can be user or trainee or blog
        // createData() = {id: 1, name: "", email:"", phone:""} => []
        // readAllData()
        // readSpecificData()
        // updateData()
        // deleteData()

// Create
    // function createFileSync() {
    //     console.log("Before...");
    //     try {
    //         fs.writeFileSync("./sample.txt", "My First file");
    //         console.log("File has been created!");
    //     } catch(err) {
    //         console.log(err);
    //     }
    //     console.log("After...");
    // }
    // createFileSync();

    // function createFileAsync() {
    //     console.log("Before...");
    //         fs.writeFile("./sample1.txt", "MODIFIED", (err) =>{
    //             if(err) {
    //                 console.log(err);
    //             } else {
    //                 console.log("File has been created!");
    //             }
    //         });
    //     console.log("After...");
    // }
    // createFileAsync();

    // function readFileSync() {
    //     console.log("Before...");
    //     let data = fs.readFileSync("./sample.txt", "utf8");
    //     console.log(data);
    //     console.log("After...");
    // }
    // readFileSync();

    // function readFileAsync() {
    //     console.log("Before...");
    //     fs.readFile("./sample.txt", "utf8", (err, data) => {
    //         if(err)
    //             console.log(err);
    //         else
    //             console.log(data);
    //     });
    //     console.log("After...");
    // }
    // readFileAsync();


    // function appendFileSync() {
    //     console.log("Before...");
    //     fs.appendFileSync("./sample.txt", "MODIFIED");
    //     console.log("Data has been updated!");
    //     console.log("After...");
    // }
    // appendFileSync();

    // function appendFile() {
    //     console.log("Before...");
    //     fs.appendFile("./sample1.txt", "NEW DATA", (err) => {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log("Data has been updated!");
    //         }
    //     });
    //     console.log("After...");
    // }
    // appendFile();

    // function deleteFileSync() {
    //     console.log("Before...");
    //     fs.unlinkSync("./sample1.txt");
    //     console.log("File has been deleted!");
    //     console.log("After...");
    // }
    // deleteFileSync();

    function deleteFileAsync() {
        console.log("Before...");
        fs.unlink("./sample.txt", (err) => {
            if(err) {
                console.log(err.message);
            } else {
                console.log("File has been deleted!");
            }
        });
        console.log("After...");
    }
    deleteFileAsync();