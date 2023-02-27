const { AddNew: AddNewModel } = require("../models/AddNew");

const addNewController = {
  create: async (req, res) => {
    try {
      const addNew = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };

      const response = await AddNewModel.create(addNew);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const addNew= await AddNewModel.find();
      res.json(addNew);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const addNew = await AddNewModel.findById(req.params.id);
      if (!addNew)
        return res.status(404).json({ msg: "AddNew not found" });
      res.json(addNew);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const addNew = await AddNewModel.findByIdAndDelete(req.params.id);
      if (!addNew)
        return res.status(404).json({ msg: "AddNew not found" });
      res.status(200).json({ addNew, msg: "AddNew deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const addNew2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedAddNew = await AddNewModel.findByIdAndUpdate(
        req.params.id,
        addNew2
      );
      if (!updatedAddNew)
        return res.status(404).json({ msg: "AddNew not found" });
      res.status(200).json({ addNew, msg: "AddNew updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = addNewController;
