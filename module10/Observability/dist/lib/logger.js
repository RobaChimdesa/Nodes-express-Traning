"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
// Create a logger instance
exports.logger = (0, pino_1.default)({
    level: process.env.LOG_LEVEL || 'info',
    // LOG_LEVEL controls verbosity:
    // debug -> detailed logs (dev)
    // info  -> normal logs (production)
    // error -> only errors
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true // makes logs readable in terminal
        }
    }
});
