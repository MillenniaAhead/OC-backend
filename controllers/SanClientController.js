const { SCUClient: SCUClientModal } = require("../models/SCUClientModal");

const SanClientController = {
  create: async (req, res) => {
    try {
      const SanClient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        clientInfo: req.body.clientInfo,
        additionalPhone: req.body.additionalPhone,
        clientSource: req.body.clientSource,
        language: req.body.language,
       
      };

      const response = await SCUClientModal.create(SanClient);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const SanClients = await SCUClientModal.find();
      res.json(SanClients);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const SanClients = await SCUClientModal.findById(req.params.id);
      if (!SanClients)
        return res.status(404).json({ msg: "SanClient not found" });
      res.json(SanClients);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const SanClients = await SCUClientModal.findByIdAndDelete(req.params.id);
      if (!SanClients)
        return res.status(404).json({ msg: "SanClient not found" });
      res.status(200).json({ SanClients, msg: "SanClient deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const SanClient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        clientInfo: req.body.clientInfo,
        additionalPhone: req.body.additionalPhone,
        clientSource: req.body.clientSource,
        language: req.body.language,
        
      };
      const updatedSanClient = await SCUClientModal.findByIdAndUpdate(
        req.params.id,
        SanClient
      );
      if (!updatedSanClient)
        return res.status(404).json({ msg: "SanClient not found" });
      res.status(200).json({ SanClient, msg: "SanClient updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SanClientController;
