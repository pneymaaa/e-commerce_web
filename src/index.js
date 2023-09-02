require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const session = require('express-session');
const mysql = require('mysql2');
const mySqlStore = require('express-mysql-session')(session);

const options = {
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
};

const pool = mysql.createPool(options);
const sessionStore = new mySqlStore(options, pool);

const productRoutes = require('./routes/products');
const loginRoutes = require('./routes/login');

const app = express();
const PORT = process.env.PORT || 5000;
const isAuth = require('./middleware/auth');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static('public'));

app.use(session({
    //key: "id",
    name: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    // cookie: {
    //     httpOnly: true,
    //     secure: false,
    //     maxAge: 1000 * 60 * 60 * 24 * 365
    // }
}))

//app.use(isAuth);
app.use('/', isAuth, productRoutes);
// app.use('/login', loginRoutes);

app.listen(PORT);