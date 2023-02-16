const { SanSetSales : SanSetSalesModal } = require("../models/SanSetSalesModal");

const SanSetSalesController = {
  create: async (req, res) => {
    try {
      const SanSetSale = {
        invoiceTitle: req.body.invoiceTitle,
        customLine: req.body.customLine,
        customLine2: req.body.customLine2,
        reciptFooter: req.body.reciptFooter,
       
      };

      const response = await SanSetSalesModal.create(SanSetSale);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const SanSetSales = await SanSetSalesModal.find();
      res.json(SanSetSales);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const SanSetSales = await SanSetSalesModal.findById(req.params.id);
      if (!SanSetSales)
        return res.status(404).json({ msg: "SanSetSale not found" });
      res.json(SanSetSales);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const SanSetSales = await SanSetSalesModal.findByIdAndDelete(req.params.id);
      if (!SanSetSales)
        return res.status(404).json({ msg: "SanSetSale not found" });
      res.status(200).json({ SanSetSales, msg: "SanSetSale deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const SanSetSale = {
        invoiceTitle: req.body.invoiceTitle,
        customLine: req.body.customLine,
        customLine2: req.body.customLine2,
        reciptFooter: req.body.reciptFooter,
        
      };
      const updatedSanSetSale = await SanSetSalesModal.findByIdAndUpdate(
        req.params.id,
        SanSetSale
      );
      if (!updatedSanSetSale)
        return res.status(404).json({ msg: "SanSetSale not found" });
      res.status(200).json({ SanSetSale, msg: "SanSetSale updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SanSetSalesController;
