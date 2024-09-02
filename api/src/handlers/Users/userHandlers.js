// handlers/Users/userHandlers.js
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../../controllers/Users/userControllers');

// Crear un nuevo usuario
const createUserHandler = async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Obtener todos los usuarios
const getUsersHandler = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Obtener usuario por ID
const getUserByIdHandler = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Actualizar usuario por ID
const updateUserHandler = async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Eliminar usuario por ID
const deleteUserHandler = async (req, res) => {
    try {
        // Check if the user trying to delete is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Only admins can delete users' });
        }
        await deleteUser(req.params.id);
        res.status(204).json();
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createUserHandler, getUsersHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler };

// const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../../controllers/Users/userControllers');

// const createUserHandler = async (req, res) => {
//     try {
//         const newUser = await createUser(req.body);
//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// const getUsersHandler = async (req, res) => {
//     try {
//         const users = await getUsers();
//         res.status(200).json(users);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// const getUserByIdHandler = async (req, res) => {
//     try {
//         const user = await getUserById(req.params.id);
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.status(200).json(user);
//     } catch (error) {
//         console.error('Error fetching user by ID:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// const updateUserHandler = async (req, res) => {
//     try {
//         const user = await updateUser(req.params.id, req.body);
//         res.status(200).json(user);
//     } catch (error) {
//         console.error('Error updating user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// const deleteUserHandler = async (req, res) => {
//     try {
//         await deleteUser(req.params.id);
//         res.status(204).json();
//     } catch (error) {
//         console.error('Error deleting user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// module.exports = { createUserHandler, getUsersHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler };