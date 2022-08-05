const fsPromise = require("fs/promises");
const fs = require("fs");
async function main() {
  const fileName = "C:/Users/tusha/Desktop/webprogram/node/write.html";
  const data1="<div><h3>Hii3</h3></div>";
  const data = await fsPromise.writeFile(fileName, data1, { encoding: "utf-8" });
  console.log(data);
  console.log(fs.readFileSync(fileName, "utf-8"));
}

main();