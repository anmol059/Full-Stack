let fs = require("fs");
let path = require("path");
function helpFn() {
    console.log(`
    Please 🙏 enter right command
    List of All the commands:
            node main.js tree "directoryPath"
            node main.js organize "directoryPath"
            node main.js help
    `);
}
module.exports = {
    helpKey : helpFn
}