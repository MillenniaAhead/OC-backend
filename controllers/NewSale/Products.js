const { Products: ProductsModel } = require("../../models/NewSale/Products");

const ProductsController = {
  create: async (req, res) => {
    try {
      const products = {
        name: req.body.name,
      };

      const response = await ProductsModel.create(products);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Products = await ProductsModel.find();
      res.json(Products);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Products = await ProductsModel.findById(req.params.id);
      if (!Products) return res.status(404).json({ msg: "name not found" });
      res.json(Products);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Products = await ProductsModel.findByIdAndDelete(req.params.id);
      if (!Products) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Products, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Products = {
        name: req.body.name,
      };
      const updatedproducts = await ProductsModel.findByIdAndUpdate(
        req.params.id,
        Products
      );
      if (!updatedproducts)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Products, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ProductsController;
