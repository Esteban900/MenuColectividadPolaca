// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const { JWT_SECRET } = process.env;
const authenticateToken = (req, res, next) => {
    console.log("JWT", JWT_SECRET);
   
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }
    
    const token = authHeader.split(' ')[1]; // Esto asume que el formato es "Bearer <token>"

    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
console.log("comparo tokken");
console.log("token", token);


    if (token == null) return res.status(401).json({ error: 'No token provided' });

    jwt.verify(token, JWT_SECRET, async (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });

        req.user = user;
        next();
    });
};

const authorizeRoles = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.status(403).json({ error: 'Forbidden' });
    next();
};

module.exports = { authenticateToken, authorizeRoles };