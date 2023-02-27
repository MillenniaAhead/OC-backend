const { VoucherList: VoucherListModel } = require("../models/VoucherList");

const voucherListController = {
  create: async (req, res) => {
    try {
      const voucherList = {
        name: req.body.name,

      };

      const response = await VoucherListModel.create(voucherList);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const voucherLists = await VoucherListModel.find();
      res.json(voucherLists);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const voucherLists = await VoucherListModel.findById(req.params.id);
      if (!voucherLists)
        return res.status(404).json({ msg: "User not found" });
      res.json(voucherLists);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const voucherLists = await VoucherListModel.findByIdAndDelete(req.params.id);
      if (!voucherLists)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ voucherLists, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const voucherList = {
        name: req.body.name,
      };
      const updatedVoucherList = await VoucherListModel.findByIdAndUpdate(
        req.params.id,
        voucherList
      );
      if (!updatedVoucherList)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ voucherList, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = voucherListController;
