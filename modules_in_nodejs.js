// step 1 : including the module

const fs = require('fs');

// reading file content
let file_content = fs.readFileSync("test.txt", "utf-8");

file_content = file_content.replace("Narendra", "Anand");

// writting the content into some other files

fs.writeFileSync("file_written_by_writeFileSync.txt", file_content)

console.log("file content : ", file_content);