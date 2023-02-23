const { Deal : DealModel } = require("../../models/anu-promote/Deal");

const dealsController = {
  create: async (req, res) => {
    try {
      const { deal_name, name, description, services, product, memberships, vouchers } = req.body

      const response = await DealModel.create(req.body);
      res.status(200).json({ response, msg: "deal created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const deals = await DealModel.find();
      res.json(deals);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const deals = await DealModel.findById(req.params.id);
      if (!deals)
        return res.status(404).json({ msg: "deal not found" });
      res.json(deals);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const deals = await DealModel.findByIdAndDelete(req.params.id);
      if (!deals)
        return res.status(404).json({ msg: "deal not found" });
      res.status(200).json({ deals, msg: "deal deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const updatedDeal = await DealModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (!updatedDeal)
        return res.status(404).json({ msg: "Deal not found" });
      res.status(200).json({ data:req.body, msg: "Deal updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = dealsController;
