const { AddNewModal: AddNewModalModel } = require("../models/AddNewModal");

const addNewModalController = {
  create: async (req, res) => {
    try {
      const response = await addNewModalModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const addNewModals = await AddNewModalModel.find();
      res.status(200).json(addNewModals);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const addNewModal = await AddNewModalModel.findById(req.params.id);
      if (!addNewModal) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json(addNewModal);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const addNewModal = await AddNewModalModel.findByIdAndDelete(req.params.id);
      if (!addNewModal) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ addNewModal, msg: "Group deleted successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const addNewModal = {
        name: req.body.name,
      };
      const updatedAddNewModal = await AddNewModalModel.findByIdAndUpdate(
        req.params.id,
        addNewModal
      );
      if (!updatedAddNewModal)
        return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ addNewModal, msg: "Group updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = addNewModalController;
