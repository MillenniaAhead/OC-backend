const { SalesHistory : SalesHistoryModel } = require("../../models/NewSale/SalesHistory");

const SalesHistoryController = {
  create: async (req, res) => {
    try {
      const response = await SalesHistoryModel.create(req.body);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const SalesHistory = await SalesHistoryModel.find();
      res.json(SalesHistory);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const SalesHistory = await SalesHistoryModel.findById(req.params.id);
      if (!SalesHistory) return res.status(404).json({ msg: "name not found" });
      res.json(SalesHistory);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const SalesHistory = await SalesHistoryModel.findByIdAndDelete(req.params.id);
      if (!SalesHistory) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ SalesHistory, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const SalesHistory = {
        name: req.body.name,
      };
      const updatedsaleshistory = await SalesHistoryModel.findByIdAndUpdate(
        req.params.id,
        SalesHistory
      );
      if (!updatedsaleshistory)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ SalesHistory, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SalesHistoryController;
