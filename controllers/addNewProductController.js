const { AddNewProduct: AddNewProductModel } = require("../models/AddNewProduct");

const addNewProductController = {
  create: async (req, res) => {
    try {
      const response = await AddNewProductModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const addNewProducts = await AddNewProductModel.find();
      res.json(addNewProducts);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const addNewProducts = await AddNewProductModel.findById(req.params.id);
      if (!addNewProducts)
        return res.status(404).json({ msg: "User not found" });
      res.json(addNewProducts);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const addNewProducts = await AddNewProductModel.findByIdAndDelete(req.params.id);
      if (!addNewProducts)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ addNewProducts, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const addNewProduct = {
        name: req.body.name,
        barcode: req.body.barcode,
        amount: req.body.amount,
        description: req.body.description,
        Pdescription: req.body.Pdescription,

      };
      const updatedAddNewProduct = await AddNewProductModel.findByIdAndUpdate(
        req.params.id,
        addNewProduct
      );
      if (!updatedAddNewProduct)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ addNewProduct, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = addNewProductController;
