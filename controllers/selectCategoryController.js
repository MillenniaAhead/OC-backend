const { SelectCategory: SelectCategoryModel } = require("../models/SelectCategory");

const selectCategoryController = {
  create: async (req, res) => {
    try {
      const response = await SelectCategoryModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const selectCategory= await SelectCategoryModel.find();
      res.json(selectCategory);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const selectCategory = await SelectCategoryModel.findById(req.params.id);
      if (!selectCategory)
        return res.status(404).json({ msg: "SelectCategory not found" });
      res.json(selectCategory);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const selectCategory = await SelectCategoryModel.findByIdAndDelete(req.params.id);
      if (!selectCategory)
        return res.status(404).json({ msg: "SelectCategory not found" });
      res.status(200).json({ selectCategory, msg: "SelectCategory deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const selectCategory2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedSelectCategory = await SelectCategoryModel.findByIdAndUpdate(
        req.params.id,
        selectCategory2
      );
      if (!updatedSelectCategory)
        return res.status(404).json({ msg: "SelectCategory not found" });
      res.status(200).json({ selectCategory, msg: "SelectCategory updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = selectCategoryController;
