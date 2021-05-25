// file system
let fs = require("fs");
// files -> create, read, update, delete

// let content = fs.readFileSync("f1.txt");
// console.log("" + content);
let buffer = fs.readFileSync("childproExample.js");
console.log("bin data ", buffer);   //output in binary buffer
console.log("bin data " +  buffer);  // strig will over power the binary buffer


// create
fs.openSync("abc.txt", "w");    // w means writing and will create empty file   //automatically file got created
// no file -> create and file exist -> content replace
fs.writeFileSync("abc.txt", "Hum aaj bhott khush hai\n");   //It will write to the abc.txt file
// no file -> create and file exist -> apppend data in end
fs.appendFileSync("abc.txt", "kya baat bhai?/n");

// folder
// make directory
// fs.mkdirSync("meriDirectory");
// fs.writeFileSync("meriDirectory/meriFile.txt", "mera content");
// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i = 0; i < content.length; i++){
//     console.log("file", content[i], "is removed");
//     // unlinkSync for removing file
//     fs.unlinkSync("meriDirectory/" + content[i]);
// }
// for removing folder
// fs.rmdirSync("meriDirectory");

// fs.existsSync  --> if a file exist at a path -> true/false;
// fs.lstatSync  -> fs.lstatSync
let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
let ans = detailsObj.isFile();
console.log(ans);
ans = detailsObj.isDirectory();
console.log(ans); 

for(let i = 1; i <= 10; i++){
    let folderName = `Lecture- ${i}`;
    fs.unlinkSync(folderName + "\\" + "readme.md" , ` # readme for ${folderName}`);
    fs.rmdirSync(folderName);
}
for(let i = 1; i <= 10; i++){
    let folderName = `Lecture- ${i}`;
    fs.mkdirSync(folderName);
    fs.writeFileSync(folderName + "\\" + "readme.md", `# readme for ${folderName}`);
}

