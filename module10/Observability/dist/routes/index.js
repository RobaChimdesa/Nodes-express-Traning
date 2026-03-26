"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Simple health route
router.get('/', (req, res) => {
    res.send('API is running');
});
// Route to trigger error
router.get('/error', (req, res) => {
    throw new Error('Test error for Sentry 🚨');
});
exports.default = router;
