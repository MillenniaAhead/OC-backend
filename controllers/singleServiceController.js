const { SingleService: SingleServiceModel } = require("../models/SingleService");

const singleServiceController = {
  create: async (req, res) => {
    try {
      const response = await SingleServiceModel.create(req.body);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const singleService= await SingleServiceModel.find();
      res.json(singleService);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const singleService = await SingleServiceModel.findById(req.params.id);
      if (!singleService)
        return res.status(404).json({ msg: "SingleService not found" });
      res.json(singleService);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const singleService = await SingleServiceModel.findByIdAndDelete(req.params.id);
      if (!singleService)
        return res.status(404).json({ msg: "SingleService not found" });
      res.status(200).json({ singleService, msg: "SingleService deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const singleService2 = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        group: req.body.group,
      };
      const updatedSingleService = await SingleServiceModel.findByIdAndUpdate(
        req.params.id,
        singleService2
      );
      if (!updatedSingleService)
        return res.status(404).json({ msg: "SingleService not found" });
      res.status(200).json({ singleService, msg: "SingleService updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = singleServiceController;
