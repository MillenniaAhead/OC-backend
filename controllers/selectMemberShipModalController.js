const { SelectMemberShipModal: SelectMemberShipModalModel } = require("../models/SelectMemberShipModal");

const selectMemberShipModalController = {
  create: async (req, res) => {
    try {
      const selectMemberShipModal = {
        name: req.body.name,
      };
      const selectMemberShipModalExists = await SelectMemberShipModalModel.findOne({ name: selectMemberShipModal.name });
      if (selectMemberShipModalExists) return res.status(422).json({ msg: "Group ready exists!" });
      const response = await SelectMemberShipModalModel.create(selectMemberShipModal);
      res.status(201).json({ response, msg: "Group successfully created!" });
    } catch (error) {
      console.log(error);
    }
  },
  getl: async (req, res) => {
    try {
      const selectMemberShipModals = await SelectMemberShipModalModel.find();
      res.status(200).json(selectMemberShipModals);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const selectMemberShipModal = await SelectMemberShipModalModel.findById(req.params.id);
      if (!selectMemberShipModal) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json(selectMemberShipModal);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const selectMemberShipModal = await SelectMemberShipModalModel.findByIdAndDelete(req.params.id);
      if (!selectMemberShipModal) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ selectMemberShipModal, msg: "Group deleted successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const selectMemberShipModal = {
        name: req.body.name,
      };
      const updatedSelectMemberShipModal = await SelectMemberShipModalModel.findByIdAndUpdate(
        req.params.id,
        selectMemberShipModal
      );
      if (!updatedSelectMemberShipModal)
        return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ selectMemberShipModal, msg: "Group updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = selectMemberShipModalController;
