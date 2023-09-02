const UsersModel = require('../models/users');

const getLogin = (req, res) => {
    return res.render('pages/login');
}
const postLogin = async (req,res) => {
    const { username, email, password } = req.body;
    try {
        const [[user]] = await UsersModel.getUserByEmail(email);
        if(user === undefined) {
            res.render('pages/contact');
        } else {
            res.render('pages/contact');
        }
    } catch (error) {
        
    }
}

module.exports = {
    getLogin,
    postLogin,
}