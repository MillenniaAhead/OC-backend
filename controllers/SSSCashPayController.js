const { SSSCash : SSSCashModal } = require("../models/SSSCashModal");

const SSSCashPayController = {
  create: async (req, res) => {
    try {
      const SSSCash = {
        cash: req.body.cash
      };

      const response = await SSSCashModal.create(SSSCash);
      res.status(200).json({ response, msg: "created successfully", SSSCash });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const SSSCashs = await SSSCashModal.find();
      res.json(SSSCashs);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const SSSCashs = await SSSCashModal.findById(req.params.id);
      if (!SSSCashs)
        return res.status(404).json({ msg: "SSSCash not found" });
      res.json(SSSCashs);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const SSSCashs = await SSSCashModal.findByIdAndDelete(req.params.id);
      if (!SSSCashs)
        return res.status(404).json({ msg: "SSSCash not found" });
      res.status(200).json({ SSSCashs, msg: "SSSCash deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const SSSCash = {
        cash: req.body.cash,
      };
      const updatedCash = await SSSCashModal.findByIdAndUpdate(
        req.params.id,
        SSSCash
      );
      if (!updatedCash)
        return res.status(404).json({ msg: "SSSCash not found" });
      res.status(200).json({ SSSCash, msg: "SSSCash updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SSSCashPayController;
