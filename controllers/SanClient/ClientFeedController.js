const { ClientFeed : ClientFeed } = require("../../models/SanClient/ClientFeed");

const SCClientFeedController = {
  create: async (req, res) => {
    try {
      const clientFeed = {
        payName: req.body.payName
      };

      const response = await ClientFeed.create(clientFeed);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const clientFeeds = await ClientFeed.find();
      res.json(clientFeeds);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const clientFeeds = await ClientFeed.findById(req.params.id);
      if (!clientFeeds)
        return res.status(404).json({ msg: "clientFeed not found" });
      res.json(clientFeeds);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const clientFeeds = await ClientFeed.findByIdAndDelete(req.params.id);
      if (!clientFeeds)
        return res.status(404).json({ msg: "clientFeed not found" });
      res.status(200).json({ clientFeeds, msg: "clientFeed deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const clientFeed = {
        payName: req.body.payName
      };
      const updatedAddPay = await ClientFeed.findByIdAndUpdate(
        req.params.id,
        clientFeed
      );
      if (!updatedAddPay)
        return res.status(404).json({ msg: "clientFeed not found" });
      res.status(200).json({ clientFeed, msg: "clientFeed updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SCClientFeedController;
