const { CategoryMod: CategoryModModel } = require("../models/CategoryMod");

const categoryModController = {
  create: async (req, res) => {
    try {
      const categoryMod = {
        name: req.body.name,
      };
      const categoryModExists = await CategoryModModel.findOne({ name: categoryMod.name });
      if (categoryModExists) return res.status(422).json({ msg: "Group already exists!" });
      const response = await CategoryModModel.create(categoryMod);
      res.status(201).json({ response, msg: "Group successfully created!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const categoryMods = await CategoryModModel.find();
      res.status(200).json(categoryMods);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const categoryMod = await CategoryModModel.findById(req.params.id);
      if (!categoryMod) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json(categoryMod);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const categoryMod = await CategoryModModel.findByIdAndDelete(req.params.id);
      if (!categoryMod) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ categoryMod, msg: "Group deleted successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const categoryMod = {
        name: req.body.name,
      };
      const updatedCategoryMod = await CategoryModModel.findByIdAndUpdate(
        req.params.id,
        categoryMod
      );
      if (!updatedCategoryMod)
        return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ categoryMod, msg: "Group updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = categoryModController;
