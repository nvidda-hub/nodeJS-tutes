const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log



// async behaviour implementation with callback

fs.readFile("test.txt", "utf-8", (err, data)=>{
    console.log(`err : ${err}\ndata:${data}`);
})

console.log("this is message")