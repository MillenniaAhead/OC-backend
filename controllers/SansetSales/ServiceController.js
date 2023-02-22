const { Services : ServiceModal } = require("../../models/SansetSale/Service");

const ServiceController = {
  create: async (req, res) => {
    try {
      const Service = {
        name: req.body.name,
        dec: req.body.dec,
        apply: req.body.apply,
        rateType: req.body.rateType,
        taxRate: req.body.taxRate,
       
      };

      const response = await ServiceModal.create(Service);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Services = await ServiceModal.find();
      res.json(Services);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Services = await ServiceModal.findById(req.params.id);
      if (!Services)
        return res.status(404).json({ msg: "Service not found" });
      res.json(Services);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Services = await ServiceModal.findByIdAndDelete(req.params.id);
      if (!Services)
        return res.status(404).json({ msg: "Service not found" });
      res.status(200).json({ Services, msg: "Service deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Service = {
        name: req.body.name,
        dec: req.body.dec,
        apply: req.body.apply,
        rateType: req.body.rateType,
        taxRate: req.body.taxRate,
       
      };
      const updatedService = await ServiceModal.findByIdAndUpdate(
        req.params.id,
        Service
      );
      if (!updatedService)
        return res.status(404).json({ msg: "Service not found" });
      res.status(200).json({ Service, msg: "Service updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ServiceController;
