const { Services: ServicesModel } = require("../../models/NewSale/Services");

const ServicesController = {
  create: async (req, res) => {
    try {
      const response = await ServicesModel.create(req.body);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Services = await ServicesModel.find();
      res.json(Services);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Services = await ServicesModel.findById(req.params.id);
      if (!Services) return res.status(404).json({ msg: "name not found" });
      res.json(Services);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Services = await ServicesModel.findByIdAndDelete(req.params.id);
      if (!Services) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Services, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Services = {
        name: req.body.name,
      };
      const updatedservices = await ServicesModel.findByIdAndUpdate(
        req.params.id,
        Services
      );
      if (!updatedservices)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Services, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ServicesController;
