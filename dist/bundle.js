console.log("main file");
//import { version } from '../package.json';
var version = "1.0.1";
var message = "current version is " + version;
//export default ()=>{
//console.log(foo);
//console.log('current version is ' + version);
//console.log(message);}

var main = (function () {
  return console.log(message);
});

export default main;
