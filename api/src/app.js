// const express = require('express');
// const morgan = require('morgan');
// const mainRouter = require('./routes/index');

// const app = express();

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(mainRouter);

const express = require ('express');
const cookieParser = require('cookie-parser');
const bodyParser = require ('body-parser');
const morgan = require('morgan');
const mainRouter = require ('./routes/index');
const cors = require('cors');

require('./db');

const app = express(); 

app.name = 'MenuColectividadPolaca';

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());

app.use(morgan("dev"));
app.use(express.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
//   });
app.use(cors({
  origin: 'https://menu-colectividad-polaca.vercel.app', // Cambia esto a la URL de tu frontend
  credentials: true,
  methods: 'GET,POST,OPTIONS,PUT,DELETE',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
}));
  
  app.use(mainRouter);
  
  // Error catching endware.
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });



module.exports = app;