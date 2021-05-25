#!/usr/bin/env node
let input = process.argv.slice(2);  // taking argument from the commmand line from the second index, this returns an array
let command = input[0];
let fs = require("fs");
let path = require("path");
let organizeObj = require("./commands/organize");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex", "txt"],
    app: ['exe', 'dmg', 'pkg', 'deb']
};
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
switch (command) {
    case "tree":
        treeObj.treeKey(input[1]);
        break;
    case "organize":
        organizeObj.organsizeKey(input[1]);
        break;
    default:
        helpObj.helpKey();
        break;
}


