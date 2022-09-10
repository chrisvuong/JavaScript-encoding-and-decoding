
const file = "C:\\Users\\chris.vuong\\Documents\\Resly Resume- Indeed.pdf";
const toFile = "./data.en";
const fs = require("fs");
var data = fs.readFileSync(file);
fs.writeFileSync(toFile, data.toString("base64" ));


