const register = (req, res, next) => {
    
    const token = req.header("authorization");
    console.log(token);
    //console.log(res);
    next();
    //res.render('pages/single-product', {result: {}});
}

module.exports = register;