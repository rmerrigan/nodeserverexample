const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  //path object here is added to dynamically control links that are sent to view
  res.render('admin/add-product', {
    //render was changed after we added admin and shop folders in view dir
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
