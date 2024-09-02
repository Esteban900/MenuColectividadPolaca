const {Sequelize } = require('sequelize');
require("dotenv").config();
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/menupolonia`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });
  const basename = path.basename(__filename);
  
  const modelDefiners = [];

//----

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Product, SaleType, Category, SubCategory } = sequelize.models;


 

//relacion de tablas

//USER-PRODUCT

User.belongsToMany(Product, { through: "user_product" });
Product.belongsToMany(User, { through: "user_product" });

// //PRODUCT-CATEGORY
// Category.hasMany(Product, { onUpdate: "CASCADE" }),
// Product.belongsTo(Category)

// // CATEGORY-SUBCATEGORY
// Category.hasMany(SubCategory, { onUpdate: "CASCADE" });
// SubCategory.belongsTo(Category);

//PRODUCT-SALETYPE
Product.belongsToMany(SaleType, { through: "product_saletype" });
SaleType.belongsToMany(Product, { through: "product_saletype" });

// //PRODUCT-SUBCATEGORY
// SubCategory.hasMany(Product, { onUpdate: "CASCADE" });
// Product.belongsTo(SubCategory);

// //SALETYPE-CATEGORY
// SaleType.belongsToMany(Category, { through: "saletype_category" });
// Category.belongsToMany(SaleType, { through: "saletype_category" });

module.exports = { ...sequelize.models,
    conn: sequelize,
};