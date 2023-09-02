const dbPool = require('../config/database');

const getUserByEmail = (email) => {
    const sqlQuery = 'SELECT * FROM users WHERE email=?';
    return dbPool.execute(sqlQuery, [email]);
};

module.exports = {
    getUserByEmail,
}

