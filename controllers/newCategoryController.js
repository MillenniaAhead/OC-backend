const { NewCategory: NewCategoryModel } = require("../models/NewCategory");

const newCategoryController = {
  create: async (req, res) => {
    try {
      const response = await NewCategoryModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const newCategory= await NewCategoryModel.find();
      res.json(newCategory);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const newCategory = await NewCategoryModel.findById(req.params.id);
      if (!newCategory)
        return res.status(404).json({ msg: "NewCategory not found" });
      res.json(newCategory);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const newCategory = await NewCategoryModel.findByIdAndDelete(req.params.id);
      if (!newCategory)
        return res.status(404).json({ msg: "NewCategory not found" });
      res.status(200).json({ newCategory, msg: "NewCategory deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const newCategory2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedNewCategory = await NewCategoryModel.findByIdAndUpdate(
        req.params.id,
        newCategory2
      );
      if (!updatedNewCategory)
        return res.status(404).json({ msg: "NewCategory not found" });
      res.status(200).json({ newCategory, msg: "NewCategory updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = newCategoryController;
