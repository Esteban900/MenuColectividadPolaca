const {Sequelize } = require('sequelize');
require("dotenv").config();

const UserModel = require('./models/user');
const ProductModel = require('./models/product');
const CategoryModel = require('./models/category');
const SaleTypeModel = require('./models/saletype');
const SubCategoryModel = require('./models/subcategory');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER} : ${DB_PASSWORD} @ ${DB_HOST}/mediavault`, {logging:false});

UserModel(sequelize);
ProductModel(sequelize);
CategoryModel(sequelize);
SaleTypeModel(sequelize);
SubCategoryModel(sequelize);
const { User, Product, SaleType, Category, SubCategory } = sequelize.models;

//relacion de tablas

//USER-PRODUCT
User.hasMany(Product, { onUpdate: "CASCADE" }),
Product.belongsTo(User, { onDelete: "CASCADE", onUpdate: "CASCADE" })

//PRODUCT-SUBCATEGORY
Category.hasMany(Product, { onUpdate: "CASCADE" }),
Product.belongsTo(Category, { onDelete: "CASCADE", onUpdate: "CASCADE" })

//SUBCATEGORY-CATEGORY
SubCategory.hasOne(Category, { onUpdate: "CASCADE" }),
Category.belongsTo(SubCategory, { onDelete: "CASCADE", onUpdate: "CASCADE" })

//PRODUCT-SALETYPE
Product.belongsToMany(SaleType, { through: "product_saletype" });
SaleType.belongsToMany(Product, { through: "product_saletype" });



module.exports = { ...sequelize.models,
    conn: sequelize,
};