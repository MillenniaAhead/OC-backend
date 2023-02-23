const { Sources: SourcesModel } = require("../../models/SettingClients/Sources");

const sourcesController = {
  create: async (req, res) => {
    try {
      const sources = {
        name: req.body.name
      };

      const response = await SourcesModel.create(sources);
      res.status(200).json({ response, msg: "Sources created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Sources = await SourcesModel.find();
      res.json(Sources);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Sources = await SourcesModel.findById(req.params.id);
      if (!Sources)
        return res.status(404).json({ msg: "Sources not found" });
      res.json(Sources);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Sources = await SourcesModel.findByIdAndDelete(req.params.id);
      if (!Sources)
        return res.status(404).json({ msg: "Sources not found" });
      res.status(200).json({ Sources, msg: "Sources deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Sources = {
        name: req.body.name
      };
      const updatedsources = await SourcesModel.findByIdAndUpdate(
        req.params.id,
        Sources
      );
      if (!updatedsources)
        return res.status(404).json({ msg: "Sources not found" });
      res.status(200).json({ Sources, msg: "Sources updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = sourcesController;