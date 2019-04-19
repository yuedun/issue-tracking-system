#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const app_1 = require("../app");
var debug = require('debug')('yuedun:www');
var http = require('http');
var port = normalizePort(process.env.PORT || '3002');
var server = http.createServer(app_1.default.callback());
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug(">>>>>>>>>>>process.env.NODE_ENV:", process.env.NODE_ENV, "app.env:", app_1.default.env, process.env.DEBUG);
    debug(new Date() + 'Listening on ' + bind);
}
//# sourceMappingURL=www.js.map