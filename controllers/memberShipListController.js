const { MemberShipList: MemberShipListModel } = require("../models/MemberShipList");

const memberShipListController = {
  create: async (req, res) => {
    try {
      const memberShipList = {
        name: req.body.name,

      };

      const response = await MemberShipListModel.create(memberShipList);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const memberShipLists = await MemberShipListModel.find();
      res.json(memberShipLists);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const memberShipLists = await MemberShipListModel.findById(req.params.id);
      if (!memberShipLists)
        return res.status(404).json({ msg: "User not found" });
      res.json(memberShipLists);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const memberShipLists = await MemberShipListModel.findByIdAndDelete(req.params.id);
      if (!memberShipLists)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ memberShipLists, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const memberShipList = {
        name: req.body.name,
      };
      const updatedMemberShipList = await MemberShipListModel.findByIdAndUpdate(
        req.params.id,
        memberShipList
      );
      if (!updatedMemberShipList)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ memberShipList, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = memberShipListController;
