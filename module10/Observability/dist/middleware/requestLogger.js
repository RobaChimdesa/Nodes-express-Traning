"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
const logger_1 = require("../lib/logger");
// Middleware to log incoming requests
const requestLogger = (req, res, next) => {
    console.log();
    const start = Date.now(); // capture start time
    res.on('finish', () => {
        const duration = Date.now() - start; // calculate response time
        logger_1.logger.info({
            method: req.method, // GET, POST...
            url: req.url, // endpoint
            status: res.statusCode, // HTTP status
            duration // response time in ms
        }, 'Incoming Request');
    });
    next(); // continue to next middleware
};
exports.requestLogger = requestLogger;
