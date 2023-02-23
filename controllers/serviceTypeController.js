const { ServiceType: ServiceTypeModel } = require("../models/ServiceType");

const serviceTypeController = {
  create: async (req, res) => {
    try {
      const response = await ServiceTypeModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const serviceType= await ServiceTypeModel.find();
      res.json(serviceType);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const serviceType = await ServiceTypeModel.findById(req.params.id);
      if (!serviceType)
        return res.status(404).json({ msg: "ServiceType not found" });
      res.json(serviceType);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const serviceType = await ServiceTypeModel.findByIdAndDelete(req.params.id);
      if (!serviceType)
        return res.status(404).json({ msg: "ServiceType not found" });
      res.status(200).json({ serviceType, msg: "ServiceType deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const serviceType2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedServiceType = await ServiceTypeModel.findByIdAndUpdate(
        req.params.id,
        serviceType2
      );
      if (!updatedServiceType)
        return res.status(404).json({ msg: "ServiceType not found" });
      res.status(200).json({ serviceType, msg: "ServiceType updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = serviceTypeController;
