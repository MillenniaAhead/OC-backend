const { Taxs : TaxModal } = require("../../models/SansetSale/tax");

const TaxController = {
  create: async (req, res) => {
    try {
      const Tax = {
        newTax: req.body.newTax,
        priceExTax: req.body.priceExTax,
        priceInTax: req.body.priceInTax,
      };

      const response = await TaxModal.create(Tax);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Taxs = await TaxModal.find();
      res.json(Taxs);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Taxs = await TaxModal.findById(req.params.id);
      if (!Taxs)
        return res.status(404).json({ msg: "Tax not found" });
      res.json(Taxs);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Taxs = await TaxModal.findByIdAndDelete(req.params.id);
      if (!Taxs)
        return res.status(404).json({ msg: "Tax not found" });
      res.status(200).json({ Taxs, msg: "Tax deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Tax = {
        newTax: req.body.newTax,
        priceExTax: req.body.priceExTax,
        priceInTax: req.body.priceInTax,
      };
      const updatedTax = await TaxModal.findByIdAndUpdate(
        req.params.id,
        Tax
      );
      if (!updatedTax)
        return res.status(404).json({ msg: "Tax not found" });
      res.status(200).json({ Tax, msg: "Tax updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = TaxController;
