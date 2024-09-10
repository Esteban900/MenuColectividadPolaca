// const app = require ('./src/app');
// const { sequelize } = require('./src/db');

// app.listen(3001, () => {
//     sequelize.sync({force:true});
//     console.log("Listening on port 3001");
// });
const app = require ('./src/app');
const { conn } = require('./src/db');


// conn.sync({ force: true}).then(() => {
//     app.listen(3001,() => {
//         console.log('%s listening at 3001');
//     });

conn.sync({ force: true }).then(() => {
    const PORT = process.env.PORT || 3001; // Usa PORT de las variables de entorno o 3001 por defecto
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });


});