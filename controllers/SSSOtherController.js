const { SSSOther : SSSOtherModel } = require("../models/SSSOtherModel");

const SSSOtherController = {
  create: async (req, res) => {
    try {
      const Other = {
        other: req.body.other,
      };

      const response = await SSSOtherModel.create(Other);
      res.status(200).json({ response, msg: "created successfully", Other });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Others = await SSSOtherModel.find();
      res.json(Others);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Others = await SSSOtherModel.findById(req.params.id);
      if (!Others)
        return res.status(404).json({ msg: "Other not found" });
      res.json(Others);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Others = await SSSOtherModel.findByIdAndDelete(req.params.id);
      if (!Others)
        return res.status(404).json({ msg: "Other not found" });
      res.status(200).json({ Others, msg: "Other deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Other = {
        other: req.body.other,
      };
      const updatedCash = await SSSOtherModel.findByIdAndUpdate(
        req.params.id,
        Other
      );
      if (!updatedCash)
        return res.status(404).json({ msg: "Other not found" });
      res.status(200).json({ Other, msg: "Other updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SSSOtherController;
