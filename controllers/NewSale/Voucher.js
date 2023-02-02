const { Voucher: VoucherModel } = require("../../models/NewSale/Voucher");

const VoucherController = {
  create: async (req, res) => {
    try {
      const voucher = {
        name: req.body.name,
      };

      const response = await VoucherModel.create(voucher);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Voucher = await VoucherModel.find();
      res.json(Voucher);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Voucher = await VoucherModel.findById(req.params.id);
      if (!Voucher) return res.status(404).json({ msg: "name not found" });
      res.json(Voucher);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Voucher = await VoucherModel.findByIdAndDelete(req.params.id);
      if (!Voucher) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Voucher, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Voucher = {
        name: req.body.name,
      };
      const updatedvoucher = await VoucherModel.findByIdAndUpdate(
        req.params.id,
        Voucher
      );
      if (!updatedvoucher)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Voucher, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = VoucherController;
