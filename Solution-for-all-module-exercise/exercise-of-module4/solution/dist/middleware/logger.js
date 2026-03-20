export const requestLogger = (req, res, next) => {
    const method = req.method; // GET, POST, PUT, etc.
    const url = req.url; // the path, e.g. /users or /health
    const time = new Date().toISOString(); // nice readable timestamp
    console.log(`[${time}] ${method} ${url}`);
    next(); // very important — let the request continue
};
