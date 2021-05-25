let fs = require("fs");
let path = require("path");
function organizeFn(dirPath) {
    // console.log("Organize command implemented for ", dirPath);
    // 1. Input directory path given
    let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd();
        // console.log("Kindly enter the path");
        return;
    } else {
        let pathExists = fs.existsSync(dirPath);
        destPath = path.join(dirPath, "Organized_Files");
        if (pathExists) {
            // 2. create organized files directory
            if (fs.existsSync(destPath) === false) {
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("Path does not exists");
            return;
        }
    }
    // 3. Identify category with the help of utility
    organizeWithCategory(dirPath, destPath);
    // 4. copy/ cut files to that organized directory inside of any of category directory
}


function organizeWithCategory(src, dest) {
    // 3. Get all the files and Identify category with the help of utility
    let filesName = fs.readdirSync(src);
    console.log(filesName);   // only names
    for (let i = 0; i < filesName.length; i++) {
        let filesAddress = path.join(src, filesName[i]);
        let isFile = fs.lstatSync(filesAddress).isFile();
        if (isFile) {
            // console.log(files[i]);
            let category = getCategory(filesName[i]);
            // console.log(filesName[i] + " extension for the file is", category);
            // 4. copy/ cut files to that organized directory inside of any of category directory
            sendFiles(filesAddress, dest, category);
        }

    }
}
function getCategory(fileName) {
    let ext = path.extname(fileName);
    ext = ext.slice(1);
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others";
}

function sendFiles(srcFilePath, dest, category) {
    let categorypath = path.join(dest, category);
    if (fs.existsSync(categorypath) == false) {
        fs.mkdirSync(categorypath);  // mkdirSync accepts path
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categorypath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
}

module.exports = {
    organsizeKey : organizeFn
}