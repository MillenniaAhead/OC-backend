const { Tip: TipModal } = require("../../models/SanClient/TipModal");

const TipController = {
  create: async (req, res) => {
    try {
      const Tip = {
        Tip: req.body.Tip
       
      };

      const response = await TipModal.create(Tip);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Tips = await TipModal.find();
      res.json(Tips);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Tips = await TipModal.findById(req.params.id);
      if (!Tips)
        return res.status(404).json({ msg: "Tip not found" });
      res.json(Tips);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Tips = await TipModal.findByIdAndDelete(req.params.id);
      if (!Tips)
        return res.status(404).json({ msg: "Tip not found" });
      res.status(200).json({ Tips, msg: "Tip deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Tip = {
        Tip: req.body.Tip
        
      };
      const updatedTip = await TipModal.findByIdAndUpdate(
        req.params.id,
        Tip
      );
      if (!updatedTip)
        return res.status(404).json({ msg: "Tip not found" });
      res.status(200).json({ Tip, msg: "Tip updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = TipController;
