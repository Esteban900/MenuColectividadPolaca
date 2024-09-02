// controllers/Users/authControllers.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../db');

const registerUser = async (userData) => {
    const { fullName, email, password, role } = userData;
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    return await User.create({
        fullName,
        email,
        // password: hashedPassword,
        password: password,
        role: role || 'editor'
    });
};

const loginUser = async (email, password) => {
    console.log("controller");
    
    console.log("email",email);
    console.log("password", password);
    
    
    const user = await User.findOne({ where: { email } });
    console.log("user", user);
    
    if (!user) throw new Error('Invalid credentials');
    console.log("si hay user");
        // Verificar la contraseña encriptada y la proporcionada
        console.log('Stored Password:', user.password);
        console.log('Provided Password:', password);
// $2a$10$ToptzAwPZ.SY3pkqQ.x5ouYIwOUsP.JgAkraj8tOn6AEhCcKhiBvC
// $2a$10$ToptzAwPZ.SY3pkqQ.x5ouYIwOUsP.JgAkraj8tOn6AEhCcKhiBvC
  
//    // const isMatch = await bcrypt.compare(password, user.password);
   const isMatch = password === user.password; 
   console.log("ismatch", isMatch);
    
    if (!isMatch) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

module.exports = { registerUser, loginUser };