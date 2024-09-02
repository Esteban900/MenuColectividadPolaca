const DataTypes = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM('editor', 'admin'),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  }, 
  {
    // hooks: {
    //   beforeCreate: async (user) => {
    //     const salt = await bcrypt.genSalt(10);
    //     user.password = await bcrypt.hash(user.password, salt);
    //   },
    // },
    // hooks: {
    //   beforeCreate: async (user) => {
    //     const salt = await bcrypt.genSalt(10);
    //     user.password = await bcrypt.hash(user.password, salt);
    //   },
    // },
    timestamps: true,
    paranoid: true,
  });

  // User.prototype.verifyPassword = async function (password) {
  //   return await bcrypt.compare(password, this.password);
  // };

  // return User;
};

// const DataTypes = require('sequelize');
// const bcrypt = require('bcryptjs');

// module.exports = (sequelize) => {
//   sequelize.define(
//     'User',
//     {
//       id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//       },
//       fullName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       role: {
//         type: DataTypes.ENUM('editor', 'admin'),
//         allowNull: false,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//        deletedAt: {
//         type: DataTypes.DATE,
//         allowNull: true,
//         defaultValue: null,
//       },
//     }, {
//         hooks: {
//             beforeCreate: async (user) => {
//                 const salt = await bcrypt.genSalt(10);
//                 user.password = await bcrypt.hash(user.password, salt);
//             },
//         },
//     },
//     {
//       timestamps: true,
//       paranoid: true,
//     }
//   );
  
//   User.prototype.verifyPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };
// };