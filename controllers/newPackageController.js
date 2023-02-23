const { NewPackage: NewPackageModel } = require("../models/NewPackage");

const newPackageController = {
  create: async (req, res) => {
    try {
      const response = await NewPackageModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const newPackage= await NewPackageModel.find();
      res.json(newPackage);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const newPackage = await NewPackageModel.findById(req.params.id);
      if (!newPackage)
        return res.status(404).json({ msg: "NewPackage not found" });
      res.json(newPackage);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const newPackage = await NewPackageModel.findByIdAndDelete(req.params.id);
      if (!newPackage)
        return res.status(404).json({ msg: "NewPackage not found" });
      res.status(200).json({ newPackage, msg: "NewPackage deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const newPackage2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedNewPackage = await NewPackageModel.findByIdAndUpdate(
        req.params.id,
        newPackage2
      );
      if (!updatedNewPackage)
        return res.status(404).json({ msg: "NewPackage not found" });
      res.status(200).json({ newPackage, msg: "NewPackage updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = newPackageController;
