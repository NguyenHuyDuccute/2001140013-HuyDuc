const jwt = require('jsonwebtoken');
module.exports = {
    verifyToken: async (req, res, next) => {
        try {
            const token = req.body.token || req.query.token;
            if (!token) {
                return res.json('Invalid token!');
            }
            jwt.verify(token, 'wpr', async (err) => {
                if (err) {
                    return res.json('Invalid token!');
                }
                return next();
            });
            
        } catch (errors) {
            console.log(errors,'errors')
            return res.status(404).json(errors);
        }
    }
}