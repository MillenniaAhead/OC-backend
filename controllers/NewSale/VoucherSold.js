const { VoucherSold: VoucherSoldModel } = require("../../models/NewSale/VoucherSold");

const VoucherSoldController = {
  create: async (req, res) => {
    try {
      const response = await VoucherSoldModel.create(req.body);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const VoucherSold = await VoucherSoldModel.find();
      res.json(VoucherSold);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const VoucherSold = await VoucherSoldModel.findById(req.params.id);
      if (!VoucherSold) return res.status(404).json({ msg: "name not found" });
      res.json(VoucherSold);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const VoucherSold = await VoucherSoldModel.findByIdAndDelete(req.params.id);
      if (!VoucherSold) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ VoucherSold, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const VoucherSold = {
        name: req.body.name,
      };
      const updatedvouchersold = await VoucherSoldModel.findByIdAndUpdate(
        req.params.id,
        VoucherSold
      );
      if (!updatedvouchersold)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ VoucherSold, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = VoucherSoldController;
