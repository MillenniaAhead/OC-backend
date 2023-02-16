const { SSSAddPay : SSSAddPayModal } = require("../models/SSSAddPayModal");

const SSSAddPayController = {
  create: async (req, res) => {
    try {
      const sssAddPay = {
        payName: req.body.payName
      };

      const response = await SSSAddPayModal.create(sssAddPay);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const sssAddPays = await SSSAddPayModal.find();
      res.json(sssAddPays);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const sssAddPays = await SSSAddPayModal.findById(req.params.id);
      if (!sssAddPays)
        return res.status(404).json({ msg: "sssAddPay not found" });
      res.json(sssAddPays);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const sssAddPays = await SSSAddPayModal.findByIdAndDelete(req.params.id);
      if (!sssAddPays)
        return res.status(404).json({ msg: "sssAddPay not found" });
      res.status(200).json({ sssAddPays, msg: "sssAddPay deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const sssAddPay = {
        payName: req.body.payName
      };
      const updatedAddPay = await SSSAddPayModal.findByIdAndUpdate(
        req.params.id,
        sssAddPay
      );
      if (!updatedAddPay)
        return res.status(404).json({ msg: "sssAddPay not found" });
      res.status(200).json({ sssAddPay, msg: "sssAddPay updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SSSAddPayController;
