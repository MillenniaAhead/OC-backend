const { Commission: CommissionModel } = require("../../models/anu-team/Commission");

const commissionController = {
  create: async (req, res) => {
    try {
      const response = await CommissionModel.create(req.body);
      res.status(200).json({ response, msg: "commission created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const commissions = await CommissionModel.find();
      res.json(commissions);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const commissions = await CommissionModel.findById(req.params.id);
      if (!commissions)
        return res.status(404).json({ msg: "commission not found" });
        res.json(commissions);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const commissions = await CommissionModel.findByIdAndDelete(req.params.id);
      if (!commissions)
        return res.status(404).json({ msg: "Commission not found" });
        res.status(200).json({ commissions, msg: "Commission deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
        
      const updatedCommission = await CommissionModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (!updatedCommission)
        return res.status(404).json({ msg: "Commission not found" });
        res.status(200).json({ body:req.body, msg: "Commission updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = commissionController;
