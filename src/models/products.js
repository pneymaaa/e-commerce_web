const { escape, escapeId } = require('mysql2');
const dbPool = require('../config/database');

const getAllProducts = () => {
    const sqlQuery = "SELECT * FROM products";
    return dbPool.execute(sqlQuery);
}

const getProduct = (id) => {
    const sqlQuery = `SELECT * FROM products WHERE id=?`;
    return dbPool.execute(sqlQuery, [id]);
}

module.exports = {
    getAllProducts,
    getProduct,
}