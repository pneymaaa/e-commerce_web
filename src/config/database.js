const mysql = require('mysql2');
const dbPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

module.exports = dbPool.promise();