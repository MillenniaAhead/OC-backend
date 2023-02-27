const { AddPay : AddPayModal } = require("../../models/SansetSale/AddPay");

const AddPayController = {
  create: async (req, res) => {
    try {
      const AddPay = {
        payName: req.body.payName
      };

      const response = await AddPayModal.create(AddPay);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const AddPays = await AddPayModal.find();
      res.json(AddPays);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const AddPays = await AddPayModal.findById(req.params.id);
      if (!AddPays)
        return res.status(404).json({ msg: "AddPay not found" });
      res.json(AddPays);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const AddPays = await AddPayModal.findByIdAndDelete(req.params.id);
      if (!AddPays)
        return res.status(404).json({ msg: "AddPay not found" });
      res.status(200).json({ AddPays, msg: "AddPay deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const AddPay = {
        payName: req.body.payName
      };
      const updatedAddPay = await AddPayModal.findByIdAndUpdate(
        req.params.id,
        AddPay
      );
      if (!updatedAddPay)
        return res.status(404).json({ msg: "AddPay not found" });
      res.status(200).json({ AddPay, msg: "AddPay updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = AddPayController;
