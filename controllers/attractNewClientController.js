const { AttractNewClient: AttractNewClientModel } = require("../models/AttractNewClient");

const attractNewClientController = {
  create: async (req, res) => {
    try {
      const attractNewClient = {
        name: req.body.name,

      };

      const response = await AttractNewClientModel.create(attractNewClient);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const attractNewClients = await AttractNewClienttModel.find();
      res.json(attractNewClients);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const attractNewClients = await AttractNewClientModel.findById(req.params.id);
      if (!attractNewClients)
        return res.status(404).json({ msg: "User not found" });
      res.json(attractNewClients);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const attractNewClients = await AttractNewClientModel.findByIdAndDelete(req.params.id);
      if (!attractNewClients)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ attractNewClients, msg: "User deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const attractNewClient = {
        name: req.body.name,
      };
      const updatedAttractNewClient = await AttractNewClientModel.findByIdAndUpdate(
        req.params.id,
        attractNewClient
      );
      if (!updatedAttractNewClient)
        return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ attractNewClient, msg: "User updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = attractNewClientController;
