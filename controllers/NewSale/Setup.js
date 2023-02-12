const { Setup: SetupModel } = require("../../models/NewSale/Setup");

const setupController = {
  create: async (req, res) => {
    try {
      const response = await SetupModel.create(req.body);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Setup = await SetupModel.find();
      res.json(Setup);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Setup = await SetupModel.findById(req.params.id);
      if (!Setup) return res.status(404).json({ msg: "name not found" });
      res.json(Setup);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Setup = await SetupModel.findByIdAndDelete(req.params.id);
      if (!Setup) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Setup, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Setup = {
        name: req.body.name,
      };
      const updatedsetup = await SetupModel.findByIdAndUpdate(
        req.params.id,
        Setup
      );
      if (!updatedsetup) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Setup, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = setupController;
