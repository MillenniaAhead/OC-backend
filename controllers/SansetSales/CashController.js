const { Cash : CashModal } = require("../../models/SansetSale/Cash");

const CashPayController = {
  create: async (req, res) => {
    try {
      const Cash = {
        cash: req.body.cash
      };

      const response = await CashModal.create(Cash);
      res.status(200).json({ response, msg: "created successfully", Cash });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Cashs = await CashModal.find();
      res.json(Cashs);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Cashs = await CashModal.findById(req.params.id);
      if (!Cashs)
        return res.status(404).json({ msg: "Cash not found" });
      res.json(Cashs);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Cashs = await CashModal.findByIdAndDelete(req.params.id);
      if (!Cashs)
        return res.status(404).json({ msg: "Cash not found" });
      res.status(200).json({ Cashs, msg: "Cash deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Cash = {
        cash: req.body.cash,
      };
      const updatedCash = await CashModal.findByIdAndUpdate(
        req.params.id,
        Cash
      );
      if (!updatedCash)
        return res.status(404).json({ msg: "Cash not found" });
      res.status(200).json({ Cash, msg: "Cash updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = CashPayController;
