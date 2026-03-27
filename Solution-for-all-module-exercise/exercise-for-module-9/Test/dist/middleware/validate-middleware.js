export const validate = (schema) => {
    return (req, res, next) => {
        //parse and validate    
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ error: 'Validation failed', details: result.error });
        }
        // Pass to next layer
        next();
    };
};
