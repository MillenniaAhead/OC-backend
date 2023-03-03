const { ServicesMenu2: ServicesMenu2Model } = require("../models/ServicesMenu2");

const servicesMenu2Controller = {
  create: async (req, res) => {
    try {
      const response = await ServiceMenu2Model.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const servicesMenu2 = await ServicesMenu2Model.find();
      res.json(servicesMenu2);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const servicesMenu2 = await ServicesMenu2Model.findById(req.params.id);
      if (!servicesMenu2)
        return res.status(404).json({ msg: "ServicesMenu2 not found" });
      res.json(servicesMenu2);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const servicesMenu2 = await ServicesMenu2Model.findByIdAndDelete(req.params.id);
      if (!servicesMenu2)
        return res.status(404).json({ msg: "ServicesMenu2 not found" });
      res.status(200).json({ servicesMenu2, msg: "ServicesMenu2 deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const serviceMenu2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedServicesMenu2 = await ServiceMenu2Model.findByIdAndUpdate(
        req.params.id,
        serviceMenu2
      );
      if (!updatedServicesMenu2)
        return res.status(404).json({ msg: "ServicesMenu2 not found" });
      res.status(200).json({ serviceMenu2, msg: "ServicesMenu2 updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = servicesMenu2Controller;
