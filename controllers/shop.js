const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  //created a custom callback function, adding object to be returned in,
  //before the return statements were not discoverable outside of fetchAll
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      //render was changed after we added admin and shop folders in view dir
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
      //Development Variables
      reqURL: req.url,
      controllerMethodName: 'getProducts'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      //render was changed after we added admin and shop folders in view dir
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      //Development Variables
      reqURL: req.url,
      controllerMethodName: 'getIndex'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
    //Development Variables
    reqURL: req.url,
    controllerMethodName: 'getCart'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
    //Development Variables
    reqURL: req.url,
    controllerMethodName: 'getCheckout'
  });
};
