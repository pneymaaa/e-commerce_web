const isAuth = (req, res, next) => {
    const isAuth = req.session.isAuth;
    //console.log(isAuth);
    // if(isAuth) {
    //     next();
    //     return    
    // }
    //res.render('pages/login')
    return res.redirect('/login');
};

module.exports = isAuth;