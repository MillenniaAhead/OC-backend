const { NewProducts: NewProductsModel } = require("../../models/NewSale/New");

const NewProductsController = {
  create: async (req, res) => {
    try {
      const newproducts = {
        name: req.body.name,
        price: req.body.price,
      };

      const response = await NewProductsModel.create(newproducts);
      res.status(200).json({ response, msg: "Product created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const NewProducts = await NewProductsModel.find();
      res.json(NewProducts);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const NewProducts = await NewProductsModel.findById(req.params.id);
      if (!NewProducts) return res.status(404).json({ msg: "Product not found" });
      res.json(NewProducts);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const NewProducts = await NewProductsModel.findByIdAndDelete(
        req.params.id
      );
      if (!NewProducts) return res.status(404).json({ msg: "Product not found" });
      res.status(200).json({ NewProducts, msg: "Product deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const NewProducts = {
        name: req.body.name,
        price: req.body.price,
      };
      const updatednewproducts = await NewProductsModel.findByIdAndUpdate(
        req.params.id,
        NewProducts
      );
      if (!updatednewproducts)
        return res.status(404).json({ msg: "Product not found" });
      res.status(200).json({ NewProducts, msg: "Product updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = NewProductsController;
