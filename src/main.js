const fs = require("fs");
const fileName = "C:/Users/tusha/Desktop/webprogram/node/write.html";
const data="<div><h3>Hii</h3></div>";
//const output = fs.writeFileSync(fileName, );
const output = fs.writeFileSync(fileName, data, {encoding:"utf-8"})



console.log(output);
console.log(fs.readFileSync(fileName, "utf-8"));
// console.log("Hello World");