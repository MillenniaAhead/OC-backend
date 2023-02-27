const { Invoice: InvoiceModal } = require("../../models/SanClient/InvoiceModal");

const InvoiceController = {
  create: async (req, res) => {
    try {
      const Invoice = {
        invoice: req.body.invoice
       
      };

      const response = await InvoiceModal.create(Invoice);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Invoices = await InvoiceModal.find();
      res.json(Invoices);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Invoices = await InvoiceModal.findById(req.params.id);
      if (!Invoices)
        return res.status(404).json({ msg: "Invoice not found" });
      res.json(Invoices);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Invoices = await InvoiceModal.findByIdAndDelete(req.params.id);
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
        invoice: req.body.invoice
        
      };
      const updatedInvoice = await InvoiceModal.findByIdAndUpdate(
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

module.exports = InvoiceController;
