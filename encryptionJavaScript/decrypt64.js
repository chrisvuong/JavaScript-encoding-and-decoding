// please copy the value of resume_64x to a file name "data.en". Or you can replace the directory of value file below to the text file storing the 
// base64 string
// then run 
// node decrypt64.js
// my resume.pdf will be available in the same directory
// Cheer,
// Chris Vuong
const file = "./data.en";
const toFile = "./resume.pdf";
const fs = require("fs");
var data = fs.readFileSync(file, {encoding:"utf8"});
let buff = Buffer.from(data, "base64");
fs.writeFileSync(toFile, buff);
