// routers/userRouter.js
const { Router } = require('express');
const {
    createUserHandler,
    getUsersHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler
} = require('../handlers/Users/userHandlers');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const userRouter = Router();

// Crear un nuevo usuario (solo accesible por admins)
userRouter.post('/', authenticateToken, authorizeRoles('admin'), createUserHandler);

// Obtener todos los usuarios (solo accesible por admins)
userRouter.get('/', authenticateToken, authorizeRoles('admin'), getUsersHandler);

// Obtener usuario por ID (solo accesible por admins)
userRouter.get('/:id', authenticateToken, authorizeRoles('admin'), getUserByIdHandler);

// Actualizar usuario por ID (solo accesible por admins)
userRouter.put('/:id', authenticateToken, authorizeRoles('admin'), updateUserHandler);

// Eliminar usuario por ID (solo accesible por admins)
userRouter.delete('/:id', authenticateToken, authorizeRoles('admin'), deleteUserHandler);

module.exports = userRouter;


// const { Router } = require('express');
// const {
//     createUserHandler,
//     getUsersHandler,
//     getUserByIdHandler,
//     updateUserHandler,
//     deleteUserHandler
// } = require('../handlers/Users/userHandlers');
// const { authenticateJWT, authorizeRoles } = require('../middlewares/authMiddleware'); // Ajusta la ruta

// const userRouter = Router();

// // Crear un nuevo usuario (protegido, solo admin)
// userRouter.post('/', authenticateJWT, authorizeRoles('admin'), createUserHandler);

// // Obtener todos los usuarios (protegido, solo admin)
// userRouter.get('/', authenticateJWT, authorizeRoles('admin'), getUsersHandler);

// // Obtener un usuario por ID (protegido, solo admin)
// userRouter.get('/:id', authenticateJWT, authorizeRoles('admin'), getUserByIdHandler);

// // Actualizar un usuario por ID (protegido, solo admin)
// userRouter.put('/:id', authenticateJWT, authorizeRoles('admin'), updateUserHandler);

// // Eliminar un usuario por ID (protegido, solo admin)
// userRouter.delete('/:id', authenticateJWT, authorizeRoles('admin'), deleteUserHandler);

// module.exports = userRouter;