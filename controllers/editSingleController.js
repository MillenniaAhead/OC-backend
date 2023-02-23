const { EditSingle: EditSingleModel } = require("../models/EditSingle");

const editSingleController = {
  create: async (req, res) => {
    try {
      const response = await EditSingleModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const editSingle= await EditSingleModel.find();
      res.json(editSingle);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const editSingle = await EditSingleModel.findById(req.params.id);
      if (!editSingle)
        return res.status(404).json({ msg: "EditSingle not found" });
      res.json(editSingle);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const editSingle= await EditSingleModel.findByIdAndDelete(req.params.id);
      if (!editSingle)
        return res.status(404).json({ msg: "EditSinglenot found" });
      res.status(200).json({ editSingle, msg: "EditSingledeleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const editSingle2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedEditSingle = await EditSingleModel.findByIdAndUpdate(
        req.params.id,
        editSingle2
      );
      if (!updatedEditSingle)
        return res.status(404).json({ msg: "EditSingle not found" });
      res.status(200).json({ editSingle, msg: "EditSingle updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = editSingleController;
