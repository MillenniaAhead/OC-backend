const { SelectBrand: SelectBrandModel } = require("../models/SelectBrand");

const selectBrandController = {
  create: async (req, res) => {
    try {
      const response = await SelectBrandModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const selectBrand= await SelectBrandModel.find();
      res.json(selectBrand);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const selectBrand = await SelectBrandModel.findById(req.params.id);
      if (!selectBrand)
        return res.status(404).json({ msg: "SelectBrand not found" });
      res.json(selectBrand);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const selectBrand = await SelectBrandModel.findByIdAndDelete(req.params.id);
      if (!selectBrand)
        return res.status(404).json({ msg: "SelectBrand not found" });
      res.status(200).json({ selectBrand, msg: "SelectBrand deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const selectBrand2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedSelectBrand = await SelectBrandModel.findByIdAndUpdate(
        req.params.id,
        selectBrand2
      );
      if (!updatedSelectBrand)
        return res.status(404).json({ msg: "SelectBrand not found" });
      res.status(200).json({ selectBrand, msg: "SelectBrand updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = selectBrandController;
