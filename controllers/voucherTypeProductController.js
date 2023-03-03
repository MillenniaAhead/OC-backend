const { VoucherTypeProduct: VoucherTypeProductModel } = require("../models/VoucherTypeProduct");

const voucherTypeProductController = {
  create: async (req, res) => {
    try {
      const response = await AddNewProductModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const voucherTypeProducts = await VoucherTypeProductModel.find();
      res.json(voucherTypeProducts);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const voucherTypeProducts = await VoucherTypeProductModel.findById(req.params.id);
      if (!voucherTypeProducts)
        return res.status(404).json({ msg: "User not found" });
      res.json(voucherTypeProducts);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const voucherTypeProducts = await VoucherTypeProductModel.findByIdAndDelete(req.params.id);
      if (!voucherTypeProducts)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ voucherTypeProducts, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const voucherTypeProduct = {
        name: req.body.name,
        value: req.body.value,
        amount: req.body.amount,

      };
      const updatedVoucherTypeProduct = await VoucherTypeProductModel.findByIdAndUpdate(
        req.params.id,
        voucherTypeProduct
      );
      if (!updatedVoucherTypeProduct)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ voucherTypeProduct, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = voucherTypeProductController;
