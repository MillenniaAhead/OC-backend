const { SelectCategoryProduct: SelectCategoryProductModel } = require("../models/SelectCategoryProduct");

const selectCategoryProductController = {
  create: async (req, res) => {
    try {
      const response = await SelectCategoryProductModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const selectCategoryProducts = await SelectCategoryProductModel.find();
      res.json(selectCategoryProducts);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const selectCategoryProducts = await SelectCategoryProductModel.findById(req.params.id);
      if (!selectCategoryProducts)
        return res.status(404).json({ msg: "User not found" });
      res.json(selectCategoryProducts);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const selectCategoryProducts = await SelectCategoryProductModel.findByIdAndDelete(req.params.id);
      if (!selectCategoryProducts)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ selectCategoryProducts, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const selectCategoryProduct = {
        name: req.body.name,
        barcode: req.body.barcode,
        amount: req.body.amount,
        description: req.body.description,
        Pdescription: req.body.Pdescription,

      };
      const updatedSelectCategoryProduct = await SelectCategoryProductModel.findByIdAndUpdate(
        req.params.id,
        selectCategoryProduct
      );
      if (!updatedSelectCategoryProduct)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ selectCategoryProduct, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = selectCategoryProductController;
