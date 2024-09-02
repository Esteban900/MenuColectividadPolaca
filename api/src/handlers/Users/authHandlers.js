// handlers/Users/authHandlers.js
const { registerUser, loginUser } = require('../../controllers/Users/authControllers');

const registerUserHandler = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const loginUserHandler = async (req, res) => {
    console.log("handler");
    try {
        console.log("try handler");
        
        const token = await loginUser(req.body.email, req.body.password);
        console.log("token handler", token);
        
        res.json({ token });
    } catch (error) {       
        console.error('Error logging in:', error);
        res.status(401).json({ error: 'Invalid credentials' });
    }
};

module.exports = { registerUserHandler, loginUserHandler };