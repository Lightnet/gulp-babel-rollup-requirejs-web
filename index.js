var express = require('express');
var app = module.exports.app = exports.app = express();
var http = require('http').Server(app);
var path = require('path');

app.use("/", express.static('./dist'));

var HOSTIP = process.env.IP || "0.0.0.0";
var HOSTPORT = process.env.PORT || 80;
http.listen(HOSTPORT, HOSTIP, function () {
    console.log('listening on:' + HOSTIP + ':' + HOSTPORT);
    console.log(new Date());
});
