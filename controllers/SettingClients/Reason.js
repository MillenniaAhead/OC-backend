const { Reason: ReasonModel } = require("../../models/SettingClients/Reason");

const reasonController = {
  create: async (req, res) => {
    try {
      const reason = {
        name: req.body.name
      };

      const response = await ReasonModel.create(reason);
      res.status(200).json({ response, msg: "Reason created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Reason = await ReasonModel.find();
      res.json(Reason);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Reason = await ReasonModel.findById(req.params.id);
      if (!Reason)
        return res.status(404).json({ msg: "Reason not found" });
      res.json(Reason);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Reason = await ReasonModel.findByIdAndDelete(req.params.id);
      if (!Reason)
        return res.status(404).json({ msg: "Reason not found" });
      res.status(200).json({ Reason, msg: "Reason deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Reason = {
        name: req.body.name
      };
      const updatedreason = await ReasonModel.findByIdAndUpdate(
        req.params.id,
        Reason
      );
      if (!updatedreason)
        return res.status(404).json({ msg: "Reason not found" });
      res.status(200).json({ Reason, msg: "Reason updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = reasonController;