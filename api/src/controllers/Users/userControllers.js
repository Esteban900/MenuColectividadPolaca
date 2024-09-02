const { User } = require('../../db'); // Ajusta la ruta según tu estructura

//Crear un nuevo usuario

const createUser = async (userData) => {
    const { fullName, email, password } = userData;
    return await User.create({
        fullName,
        email,
        password, // Suponiendo que el hash ya se ha hecho en el modelo
        role: userData.role || 'editor' // Default role is 'editor'
    });
};

// Obtener todos los usuarios
const getUsers = async () => {
    return await User.findAll();
};

// Obtener usuario por ID
const getUserById = async (id) => {
    return await User.findByPk(id);
};

// Actualizar usuario
const updateUser = async (id, userData) => {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return await user.update(userData);
};

// Eliminar usuario
const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return await user.destroy();
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };