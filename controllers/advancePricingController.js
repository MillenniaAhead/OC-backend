const { AdvancePricing: AdvancePricingModel } = require("../models/AdvancePricing");

const advancePricingController = {
  create: async (req, res) => {
    try {
      const response = await AdvancePricingModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const advancePricing= await AdvancePricingModel.find();
      res.json(advancePricing);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const advancePricing = await AdvancePricingModel.findById(req.params.id);
      if (!advancePricing)
        return res.status(404).json({ msg: "AdvancePricing not found" });
      res.json(advancePricing);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const advancePricing = await AdvancePricingModel.findByIdAndDelete(req.params.id);
      if (!advancePricing)
        return res.status(404).json({ msg: "AdvancePricing not found" });
      res.status(200).json({ advancePricing, msg: "AdvancePricing deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const advancePricing2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedAdvancePricing = await AdvancePricingModel.findByIdAndUpdate(
        req.params.id,
        advancePricing2
      );
      if (!updatedAdvancePricing)
        return res.status(404).json({ msg: "AdvancePricing not found" });
      res.status(200).json({ advancePricing, msg: "AdvancePricing updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = advancePricingController;
