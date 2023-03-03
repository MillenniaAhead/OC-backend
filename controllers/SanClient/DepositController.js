const { Deposit: DepositModal } = require("../../models/SanClient/DepositModal");

const DepositController = {
  create: async (req, res) => {
    try {
      const Deposit = {
        deposit: req.body.deposit
       
      };

      const response = await DepositModal.create(Deposit);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Deposits = await DepositModal.find();
      res.json(Deposits);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Deposits = await DepositModal.findById(req.params.id);
      if (!Deposits)
        return res.status(404).json({ msg: "Deposit not found" });
      res.json(Deposits);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Deposits = await DepositModal.findByIdAndDelete(req.params.id);
      if (!Deposits)
        return res.status(404).json({ msg: "Deposit not found" });
      res.status(200).json({ Deposits, msg: "Deposit deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Deposit = {
        deposit: req.body.deposit
        
      };
      const updatedDeposit = await DepositModal.findByIdAndUpdate(
        req.params.id,
        Deposit
      );
      if (!updatedDeposit)
        return res.status(404).json({ msg: "Deposit not found" });
      res.status(200).json({ Deposit, msg: "Deposit updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = DepositController;
