const { SaleInvoice : SaleInvoicesModal } = require("../../models/SansetSale/SaleInvoice");

const SaleInvoiceController = {
  create: async (req, res) => {
    try {
      const SaleInvoice = {
        no: req.body.no,
        number: req.body.number,
       
      };

      const response = await SaleInvoicesModal.create(SaleInvoice);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const SaleInvoices = await SaleInvoicesModal.find();
      res.json(SaleInvoices);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const SaleInvoices = await SaleInvoicesModal.findById(req.params.id);
      if (!SaleInvoices)
        return res.status(404).json({ msg: "SaleInvoice not found" });
      res.json(SaleInvoices);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const SaleInvoices = await SaleInvoicesModal.findByIdAndDelete(req.params.id);
      if (!SaleInvoices)
        return res.status(404).json({ msg: "SaleInvoice not found" });
      res.status(200).json({ SaleInvoices, msg: "SaleInvoice deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const SaleInvoice = {
        no: req.body.no,
        number: req.body.number,
        
      };
      const updatedSaleInvoice = await SaleInvoicesModal.findByIdAndUpdate(
        req.params.id,
        SaleInvoice
      );
      if (!updatedSaleInvoice)
        return res.status(404).json({ msg: "SaleInvoice not found" });
      res.status(200).json({ SaleInvoice, msg: "SaleInvoice updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SaleInvoiceController;
