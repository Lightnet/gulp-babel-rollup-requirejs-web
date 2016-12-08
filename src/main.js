import foo from './foo.js';
console.log("main file");
//import { version } from '../package.json';
var version = "1.0.2";
const message = `current version is ${version}`;
//different ways
//export default ()=>{
  //console.log(foo);
  //console.log('current version is ' + version);
  //console.log(message);}

export default ()=> console.log(message);
