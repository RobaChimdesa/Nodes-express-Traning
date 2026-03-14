export const logger = (req, res, next) => {
    const requestMethod = req.method;
    const requestUrl = req.url;
    const timestamp = new Date().toISOString();
    console.log("requestMethod:", requestMethod);
    console.log("requestUrl:", requestUrl);
    console.log("timestamp:", timestamp);
    next();
};
