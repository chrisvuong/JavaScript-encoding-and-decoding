
const file = ""; // put the file url here
const toFile = "./data.en";
const fs = require("fs");
var data = fs.readFileSync(file);
fs.writeFileSync(toFile, data.toString("base64" ));


