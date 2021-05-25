let cp = require("child_process");
console.log("Trying to open calculator");
// cp.execSync("code");   //will open vs code in your system
// cp.execSync("calc");  // will open calculator in your system
console.log("opened calculator");
// ye sari cheeze command line se uthayi hai
console.log("Trying to open our true ❤");
cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("Opend our true ❤");

let output = cp.execSync("node childproExample.js");
console.log("output  🔥🔥 " +  output);
