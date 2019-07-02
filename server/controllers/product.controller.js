const Products = require('../models/product');
const productCtrl = {};

productCtrl.getProducts = async ( req, res) => {
    const products = await Products.find();
    res.json(products);
};

productCtrl.createProducts = async (req, res) => {
   const product = new Products ({
    name: req.body.name,
    description: req.body.description,
    precio: req.body.precio
   });
   await product.save()
   res.json({
       'status': 'Product Saved'
   });
};

productCtrl.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
    res.json(product);
}
productCtrl.editProduct = async (req, res) => {
    const { id } = req.params;
    const product = {
        name: req.body.name,
        description: req.body.description,
        precio: req.body.precio
    };

   await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
    res.json({status: 'Product Updated'});
};

productCtrl.deleteProduct = async (req, res) => {
    await Products.findByIdAndRemove(req.params.id);
   //await Product.findByIdAndRemove(req.params.id);
   res.json({status: 'Product Deleted'});
}
module.exports = productCtrl;
