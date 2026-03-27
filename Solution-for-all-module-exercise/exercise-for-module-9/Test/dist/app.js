import "dotenv/config";
import express from 'express';
import itemRouter from './routes/item.route'; // adjust path if needed
import authRouter from './routes/auth.routes';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/auth', authRouter);
app.use('/items', itemRouter);
// Health check
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
// 404 handler (not found)
app.use((_req, res) => {
    res.status(404).json({ status: 'error', message: 'Not found' });
});
// Global error handler — using ErrorRequestHandler type
const errorHandler = (err, req, res, next) => {
    console.error('Unhandled error:', err);
    const status = err.status || 500;
    const message = err.message || 'Internal server error';
    res.status(status).json({
        status: 'error',
        message,
        ...(process.env.NODE_ENV === 'development' && { error: err.message, stack: err.stack }),
    });
};
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
