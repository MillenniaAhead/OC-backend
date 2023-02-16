const { SSSServices : SSSServiceModal } = require("../models/SSSServiceModal");

const SSSServiceController = {
  create: async (req, res) => {
    try {
      const sssService = {
        name: req.body.name,
        dec: req.body.dec,
        apply: req.body.apply,
        rateType: req.body.rateType,
        taxRate: req.body.taxRate,
       
      };

      const response = await SSSServiceModal.create(sssService);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const sssServices = await SSSServiceModal.find();
      res.json(sssServices);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const sssServices = await SSSServiceModal.findById(req.params.id);
      if (!sssServices)
        return res.status(404).json({ msg: "Service not found" });
      res.json(sssServices);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const sssServices = await SSSServiceModal.findByIdAndDelete(req.params.id);
      if (!sssServices)
        return res.status(404).json({ msg: "Service not found" });
      res.status(200).json({ sssServices, msg: "Service deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const sssService = {
        name: req.body.name,
        dec: req.body.dec,
        apply: req.body.apply,
        rateType: req.body.rateType,
        taxRate: req.body.taxRate,
       
      };
      const updatedService = await SSSServiceModal.findByIdAndUpdate(
        req.params.id,
        sssService
      );
      if (!updatedService)
        return res.status(404).json({ msg: "Service not found" });
      res.status(200).json({ sssService, msg: "Service updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SSSServiceController;
