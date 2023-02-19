const { Client: ClientModal } = require("../../models/SanClient/ClientModal");

const ClientController = {
  create: async (req, res) => {
    try {
      const Client = {
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

      const response = await ClientModal.create(Client);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Clients = await ClientModal.find();
      res.json(Clients);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Clients = await ClientModal.findById(req.params.id);
      if (!Clients)
        return res.status(404).json({ msg: "Client not found" });
      res.json(Clients);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Clients = await ClientModal.findByIdAndDelete(req.params.id);
      if (!Clients)
        return res.status(404).json({ msg: "Client not found" });
      res.status(200).json({ Clients, msg: "Client deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Client = {
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
      const updatedClient = await ClientModal.findByIdAndUpdate(
        req.params.id,
        Client
      );
      if (!updatedClient)
        return res.status(404).json({ msg: "Client not found" });
      res.status(200).json({ Client, msg: "Client updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ClientController;
