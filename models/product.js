//mocking an actual db solution for now
//--static: able to call from class declaration in document, Product.fetchAll(object)
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  //cb is passed in as function
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      //returns text in document to json array
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    //products here is the callback function
    getProductsFromFile(products => {
      //need to use arrow function above in readfile so this isn't out of scope
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
