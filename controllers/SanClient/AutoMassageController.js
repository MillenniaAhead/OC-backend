const { AutoMassage: AutoMassageModal } = require("../../models/SanClient/AutoMassageModal");

const AutoMassageController = {
  create: async (req, res) => {
    try {
      const AutoMassage = {
        autoMassage: req.body.autoMassage
       
      };

      const response = await AutoMassageModal.create(AutoMassage);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const AutoMassages = await AutoMassageModal.find();
      res.json(AutoMassages);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const AutoMassages = await AutoMassageModal.findById(req.params.id);
      if (!AutoMassages)
        return res.status(404).json({ msg: "AutoMassage not found" });
      res.json(AutoMassages);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const AutoMassages = await AutoMassageModal.findByIdAndDelete(req.params.id);
      if (!AutoMassages)
        return res.status(404).json({ msg: "AutoMassage not found" });
      res.status(200).json({ AutoMassages, msg: "AutoMassage deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const AutoMassage = {
        autoMassage: req.body.autoMassage
        
      };
      const updatedAutoMassage = await AutoMassageModal.findByIdAndUpdate(
        req.params.id,
        AutoMassage
      );
      if (!updatedAutoMassage)
        return res.status(404).json({ msg: "AutoMassage not found" });
      res.status(200).json({ AutoMassage, msg: "AutoMassage updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = AutoMassageController;
