const { AddCatMod: AddCatModModel } = require("../models/AddCatMod");

const addCatModController = {
  create: async (req, res) => {
    try {
      const response = await addCatModModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },

  getl: async (req, res) => {
    try {
      const addCatMods = await AddCatModModel.find();
      res.status(200).json(addCatMods);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const addCatMod = await AddCatModModel.findById(req.params.id);
      if (!addCatMod) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json(addCatMod);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const addCatMod = await AddCatModModel.findByIdAndDelete(req.params.id);
      if (!addCatMod) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ addCatMod, msg: "Group deleted successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const addCatMod = {
        name: req.body.name,
      };
      const updatedAddCatMod = await AddCatModModel.findByIdAndUpdate(
        req.params.id,
        addCatMod
      );
      if (!updatedAddCatMod)
        return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ addCatMod, msg: "Group updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = addCatModController;
