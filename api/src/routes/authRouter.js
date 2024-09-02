// routers/authRouter.js
const { Router } = require('express');
const { registerUserHandler, loginUserHandler } = require('../handlers/Users/authHandlers');

const authRouter = Router();

authRouter.post('/register', registerUserHandler);
authRouter.post('/login', loginUserHandler);

module.exports = authRouter;