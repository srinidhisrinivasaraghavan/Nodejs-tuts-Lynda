var path = require('path');
var util =require('util');
var v8 = require('v8');

//path module
//pluck out the filename
console.log(path.basename(__filename));

//create a path directory using path.join -> the strings as folder structure to current directory
var dirUploads = path.join(__dirname,"www","files","uploads");

console.log(dirUploads);

//util module -> prints along with time stamp
util.log(dirUploads);

//v8 module -> to get memory related data
util.log(v8.getHeapStatistics());





