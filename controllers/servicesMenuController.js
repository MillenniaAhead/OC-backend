const { ServicesMenu: ServicesMenuModel } = require("../models/ServicesMenu");

const servicesMenuController = {
  create: async (req, res) => {
    try {
      const response = await ServiceMenuModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const servicesMenu = await ServicesMenuModel.find();
      res.json(servicesMenu);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const servicesMenu = await ServicesMenuModel.findById(req.params.id);
      if (!servicesMenu)
        return res.status(404).json({ msg: "ServicesMenu not found" });
      res.json(servicesMenu);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const servicesMenu = await ServicesMenuModel.findByIdAndDelete(req.params.id);
      if (!servicesMenu)
        return res.status(404).json({ msg: "ServicesMenu not found" });
      res.status(200).json({ servicesMenu, msg: "ServicesMenu deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const serviceMenu = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedServicesMenu = await ServiceMenuModel.findByIdAndUpdate(
        req.params.id,
        serviceMenu
      );
      if (!updatedServicesMenu)
        return res.status(404).json({ msg: "ServicesMenu not found" });
      res.status(200).json({ serviceMenu, msg: "ServicesMenu updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = servicesMenuController;
