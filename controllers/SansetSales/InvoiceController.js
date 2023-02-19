const { Invoice : InvoicesModal } = require("../../models/SansetSale/invoiceModal");

const InvoicesController = {
  create: async (req, res) => {
    try {
      const Invoice = {
        invoiceTitle: req.body.invoiceTitle,
        customLine: req.body.customLine,
        customLine2: req.body.customLine2,
        reciptFooter: req.body.reciptFooter,
       
      };

      const response = await InvoicesModal.create(Invoice);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Invoices = await InvoicesModal.find();
      res.json(Invoices);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Invoices = await InvoicesModal.findById(req.params.id);
      if (!Invoices)
        return res.status(404).json({ msg: "Invoice not found" });
      res.json(Invoices);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Invoices = await InvoicesModal.findByIdAndDelete(req.params.id);
      if (!Invoices)
        return res.status(404).json({ msg: "Invoice not found" });
      res.status(200).json({ Invoices, msg: "Invoice deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Invoice = {
        invoiceTitle: req.body.invoiceTitle,
        customLine: req.body.customLine,
        customLine2: req.body.customLine2,
        reciptFooter: req.body.reciptFooter,
        
      };
      const updatedInvoice = await InvoicesModal.findByIdAndUpdate(
        req.params.id,
        Invoice
      );
      if (!updatedInvoice)
        return res.status(404).json({ msg: "Invoice not found" });
      res.status(200).json({ Invoice, msg: "Invoice updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = InvoicesController;
