const ProductsModel = require('../models/products');
const getAllProducts = async (req, res) => {
    try {
        const [data] = await ProductsModel.getAllProducts();
        //console.log(data);
        res.render('pages/index', {result: data});
    } catch (error) {
        res.render('pages/index', {result: error});
    }
    //res.render('pages/index');
}

const getProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const [[data]] = await ProductsModel.getProduct(id);
        if(data == undefined) {
            res.render('pages/contact', {result: data})
        } else {
            res.render('pages/single-product', {result: data})
        }
    } catch (error) {
        res.render('pages/single-product', {result: error});
    }
}

module.exports = {
    getAllProducts,
    getProduct,
}