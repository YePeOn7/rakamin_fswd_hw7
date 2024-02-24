const fs = require('fs');

// read file
const data = fs.readFileSync("./homework.log", "utf-8");
console.log(data);

// write file
fs.writeFileSync("output.txt", data);
