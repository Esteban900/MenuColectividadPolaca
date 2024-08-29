// const app = require ('./src/app');
// const { sequelize } = require('./src/db');

// app.listen(3001, () => {
//     sequelize.sync({force:true});
//     console.log("Listening on port 3001");
// });
const app = require ('./src/app');
const { conn } = require('./src/db');


conn.sync({ alter: true}).then(() => {
    app.listen(3001,() => {
        console.log('%s listening at 3001');
    });
});