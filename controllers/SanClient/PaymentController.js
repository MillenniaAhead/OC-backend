const { Payment: PaymentModal } = require("../../models/SanClient/PaymentModal");

const PaymentController = {
  create: async (req, res) => {
    try {
      const Payment = {
        payment: req.body.payment
       
      };

      const response = await PaymentModal.create(Payment);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Payments = await PaymentModal.find();
      res.json(Payments);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Payments = await PaymentModal.findById(req.params.id);
      if (!Payments)
        return res.status(404).json({ msg: "Payment not found" });
      res.json(Payments);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Payments = await PaymentModal.findByIdAndDelete(req.params.id);
      if (!Payments)
        return res.status(404).json({ msg: "Payment not found" });
      res.status(200).json({ Payments, msg: "Payment deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Payment = {
        payment: req.body.payment
        
      };
      const updatedPayment = await PaymentModal.findByIdAndUpdate(
        req.params.id,
        Payment
      );
      if (!updatedPayment)
        return res.status(404).json({ msg: "Payment not found" });
      res.status(200).json({ Payment, msg: "Payment updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = PaymentController;
