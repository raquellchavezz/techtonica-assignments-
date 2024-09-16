//NOTE: I will be using port 5002 instead of 8080 since 8080 is already in use due to another project I was working on 
// Also, this assignement is in my techtonica-assignements repo in github instead of my techtonica-knowledge-checks. 
//I know we were supposed to do this assignment in the knowlege check repo and create a new branch however I did not have time to fix this today 
// so it will be in my techtonica-assignments repo under the branch "week6-knowledge-check"

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5002;

app.use(cors());
const jsonParser = bodyParser.json();

// Telling express - there is another folder that you need to find 
app.use(express.static("../client"));

// __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
//source: https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname

//first get request: `localhost:8080` should take users to index.html, in this case I am using port 5002 becasue 8080 is being used for another project 
app.get('/', (req, res) =>{
    //res.json("Hello this will be a single page");
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get('/about', (req, res) =>{
    //res.json("Hello this will be a single page");
    res.sendFile(path.join(__dirname, "../client/about.html"));
});

app.get('/contactme', (req, res) =>{
    //res.json("Hello this will be a single page");
    res.sendFile(path.join(__dirname, "../client/contactme.html"));
});

app.use((req, res) =>{
    res.status(404).sendFile(path.join(__dirname, "../client/404.html"))
})

app.listen(PORT, ()=> console.log(`HOLA! this is my server in port ${PORT} `));







// const express = require("express"); 
// const cors = require("cors"); 
// const bodyParser = require("body-parser") //lets express know what is in the html
// const path = require("path"); 

// const app = express(); 
// const PORT = 8082;  //port we are on
// const jsonParser = bodyParser.json;

// app.use(cors()); 
// //theres another folder express needs to read: 
// app.use(express.static("client"));   //tell express the client folder exists
// // now need to create relative path of the folder 
// express.static(path.join(__dirname,"/client")) //relative path

// app.get('/', (req, res)=>{
//     // res.json('Hello this will be a single page');// testing should give us this text on the browser when we do localhost:8080
//     res.sendFile(path.join(__dirname, "../client/index.html"))
// } )

// //router for about me
// app.get('/aboutme', (req, res)=>{ //then need to create html
//     // res.json('Hello this will be a single page');// testing should give us this text on the browser when we do localhost:8080
//     res.sendFile(path.join(__dirname, "../client/about.html")) //making sure the path is about me
// } )

// //anything that user calls thats not a valid path: 
// //must be last router of app kind of like a switch or an else
// app.use((req,res)=>{
//     res.status(404).sendFile(path.join(__dirname, "../client/404.html"))
// })
// //simple post req

// // app.post("/", (req,res) => {
// //     res.send(req.body)
// // }) 
// app.listen(PORT, console.log(`Hello, this is my server in port ${PORT}`)); //testing to see if port we are on is working