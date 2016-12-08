define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  console.log("main file");
  //import { version } from '../package.json';
  var version = "1.0.2";
  var message = "current version is " + version;
  //different ways
  //export default ()=>{
  //console.log(foo);
  //console.log('current version is ' + version);
  //console.log(message);}

  var main = function main() {
    return console.log(message);
  };

  exports.default = main;
});