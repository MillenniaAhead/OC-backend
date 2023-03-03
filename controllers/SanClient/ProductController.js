const { Product: ProductModal } = require("../../models/SanClient/ProductModal");

const ProductController = {
  create: async (req, res) => {
    try {
      const Product = {
        product: req.body.product
       
      };

      const response = await ProductModal.create(Product);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Products = await ProductModal.find();
      res.json(Products);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Products = await ProductModal.findById(req.params.id);
      if (!Products)
        return res.status(404).json({ msg: "Product not found" });
      res.json(Products);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Products = await ProductModal.findByIdAndDelete(req.params.id);
      if (!Products)
        return res.status(404).json({ msg: "Product not found" });
      res.status(200).json({ Products, msg: "Product deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Product = {
        product: req.body.product
        
      };
      const updatedProduct = await ProductModal.findByIdAndUpdate(
        req.params.id,
        Product
      );
      if (!updatedProduct)
        return res.status(404).json({ msg: "Product not found" });
      res.status(200).json({ Product, msg: "Product updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ProductController;
