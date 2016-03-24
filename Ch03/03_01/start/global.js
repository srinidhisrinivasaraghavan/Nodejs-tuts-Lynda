var path = require("path");

console.log("Hello World!");

var hello="Hello from node";
console.log(hello);

var place="node.js";
console.log(`Rock the world from ${place}`);

console.log(__filename);
console.log(__dirname);

//gets only the file name from the path
console.log(`${path.basename(__filename)}`);
