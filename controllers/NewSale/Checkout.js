const { Checkout: CheckoutModel } = require("../../models/NewSale/Checkout");

const CheckoutController = {
  create: async (req, res) => {
    try {
      const checkout = {
        name: req.body.name,
      };

      const response = await CheckoutModel.create(checkout);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Checkout = await CheckoutModel.find();
      res.json(Checkout);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Checkout = await CheckoutModel.findById(req.params.id);
      if (!Checkout) return res.status(404).json({ msg: "name not found" });
      res.json(Checkout);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Checkout = await CheckoutModel.findByIdAndDelete(req.params.id);
      if (!Checkout) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Checkout, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Checkout = {
        name: req.body.name,
      };
      const updatedcheckout = await CheckoutModel.findByIdAndUpdate(
        req.params.id,
        Checkout
      );
      if (!updatedcheckout)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Checkout, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = CheckoutController;
