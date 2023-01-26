const { Group: GroupModel } = require("../models/Group");

const groupController = {
  create: async (req, res) => {
    try {
      const group = {
        name: req.body.name,
      };
      const groupExists = await GroupModel.findOne({ name: group.name });
      if (groupExists) return res.status(422).json({ msg: "Group already exists!" });
      const response = await GroupModel.create(group);
      res.status(201).json({ response, msg: "Group successfully created!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const groups = await GroupModel.find();
      res.status(200).json(groups);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const group = await GroupModel.findById(req.params.id);
      if (!group) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json(group);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const group = await GroupModel.findByIdAndDelete(req.params.id);
      if (!group) return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ group, msg: "Group deleted successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const group = {
        name: req.body.name,
      };
      const updatedGroup = await GroupModel.findByIdAndUpdate(
        req.params.id,
        group
      );
      if (!updatedGroup)
        return res.status(404).json({ msg: "Group not found!" });
      res.status(200).json({ group, msg: "Group updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = groupController;
