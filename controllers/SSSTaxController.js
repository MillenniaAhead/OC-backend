const { SSSTaxs : SSSTaxModal } = require("../models/SSSTaxModal");

const SSSTaxController = {
  create: async (req, res) => {
    try {
      const sssTax = {
        newTax: req.body.newTax,
        priceExTax: req.body.priceExTax,
        priceInTax: req.body.priceInTax,
      };

      const response = await SSSTaxModal.create(sssTax);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const sssTaxs = await SSSTaxModal.find();
      res.json(sssTaxs);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const sssTaxs = await SSSTaxModal.findById(req.params.id);
      if (!sssTaxs)
        return res.status(404).json({ msg: "sssTax not found" });
      res.json(sssTaxs);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const sssTaxs = await SSSTaxModal.findByIdAndDelete(req.params.id);
      if (!sssTaxs)
        return res.status(404).json({ msg: "sssTax not found" });
      res.status(200).json({ sssTaxs, msg: "sssTax deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const sssTax = {
        newTax: req.body.newTax,
        priceExTax: req.body.priceExTax,
        priceInTax: req.body.priceInTax,
      };
      const updatedsssTax = await SSSTaxModal.findByIdAndUpdate(
        req.params.id,
        sssTax
      );
      if (!updatedsssTax)
        return res.status(404).json({ msg: "sssTax not found" });
      res.status(200).json({ sssTax, msg: "sssTax updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SSSTaxController;
