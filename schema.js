// 3. Create schema in any Database script or any ORM (Object Relational Mapping).

// need to initialize nodejs and install dependencies
const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  sku: {
    type: String,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product_Category",
    required: true
  },
  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Inventory"
  },
  discount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Discount"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Product_Category Schema
const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("Product", productSchema);
const ProductCategory = mongoose.model(
  "Product_Category",
  productCategorySchema
);

module.exports = {
  Product,
  ProductCategory
};
