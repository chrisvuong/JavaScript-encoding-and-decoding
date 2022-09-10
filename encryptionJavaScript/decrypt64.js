
const file = "./data.en";
const toFile = "./resume.pdf";
const fs = require("fs");
var data = fs.readFileSync(file, {encoding:"utf8"});
let buff = Buffer.from(data, "base64");
fs.writeFileSync(toFile, buff);
