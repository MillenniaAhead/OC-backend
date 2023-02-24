const { VoucherSettingList: VoucherSettingListModel } = require("../models/VoucherSettingList");

const voucherSettingListController = {
  create: async (req, res) => {
    try {
      const voucherSettingList = {
        name: req.body.name,

      };

      const response = await VoucherSettingListModel.create(voucherSettingList);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const voucherSettingLists = await VoucherSettingListModel.find();
      res.json(voucherSettingLists);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const voucherSettingLists = await VoucherSettingListModel.findById(req.params.id);
      if (!voucherSettingLists)
        return res.status(404).json({ msg: "User not found" });
      res.json(voucherSettingLists);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const voucherSettingLists = await VoucherSettingListModel.findByIdAndDelete(req.params.id);
      if (!voucherSettingLists)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ voucherSettingLists, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const voucherSettingList = {
        name: req.body.name,
      };
      const updatedVoucherSettingList = await VoucherSettingListModel.findByIdAndUpdate(
        req.params.id,
        voucherSettingList
      );
      if (!updatedVoucherSettingList)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ voucherSettingList, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = voucherSettingListController;
