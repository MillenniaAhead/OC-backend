const { CreateVoucher: CreateVoucherModel } = require("../../models/NewSale/Createvoucher");

const CreateVoucherController = {
  create: async (req, res) => {
    try {
      const createvoucher = {
        name: req.body.name,
        price: req.body.price,
      };

      const response = await CreateVoucherModel.create(createvoucher);
      res.status(200).json({ response, msg: "Voucher created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const CreateVoucher = await CreateVoucherModel.find();
      res.json(CreateVoucher);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const CreateVoucher = await CreateVoucherModel.findById(req.params.id);
      if (!CreateVoucher) return res.status(404).json({ msg: "Voucher not found" });
      res.json(CreateVoucher);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const CreateVoucher = await CreateVoucherModel.findByIdAndDelete(
        req.params.id
      );
      if (!CreateVoucher) return res.status(404).json({ msg: "Voucher not found" });
      res.status(200).json({ CreateVoucher, msg: "Voucher deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const CreateVoucher = {
        name: req.body.name,
        price: req.body.price,
      };
      const updatedcreatevoucher = await CreateVoucherModel.findByIdAndUpdate(
        req.params.id,
        CreateVoucher
      );
      if (!updatedcreatevoucher)
        return res.status(404).json({ msg: "Voucher not found" });
      res.status(200).json({ CreateVoucher, msg: "Voucher updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = CreateVoucherController;
