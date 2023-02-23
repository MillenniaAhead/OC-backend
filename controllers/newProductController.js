const { NewProduct: NewProductModel } = require("../models/NewProduct");

const newProductController = {
  create: async (req, res) => {
    try {
      const response = await NewProductModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const newProduct= await NewProductModel.find();
      res.json(newProduct);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const newProduct = await NewProductModel.findById(req.params.id);
      if (!newProduct)
        return res.status(404).json({ msg: "NewProduct not found" });
      res.json(newProduct);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const newProduct = await NewProductModel.findByIdAndDelete(req.params.id);
      if (!newProduct)
        return res.status(404).json({ msg: "NewProduct not found" });
      res.status(200).json({ newProduct, msg: "NewProduct deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const newProduct2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedNewProduct = await NewProductModel.findByIdAndUpdate(
        req.params.id,
        newProduct2
      );
      if (!updatedNewProduct)
        return res.status(404).json({ msg: "NewProduct not found" });
      res.status(200).json({ newProduct, msg: "NewProduct updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = newProductController;
