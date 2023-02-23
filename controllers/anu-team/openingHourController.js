const { OpeningHour: OpeningHourModel } = require("../../models/anu-team/OpeningHours");

const openingHourController = {
  create: async (req, res) => {
    try {
      const response = await OpeningHourModel.create(req.body);
      res.status(200).json({ response, msg: "Opening hours created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const openingHours = await OpeningHourModel.find();
      res.json(openingHours);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const openingHours = await OpeningHourModel.findById(req.params.id);
      if (!openingHours)
        return res.status(404).json({ msg: "Opening hours not found" });
        res.json(openingHours);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const openingHours = await OpeningHourModel.findByIdAndDelete(req.params.id);
      if (!openingHours)
        return res.status(404).json({ msg: "Opening hours not found" });
        res.status(200).json({ openingHours, msg: "Opening hours deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
        
      const updatedOpeningHours = await OpeningHourModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (!updatedOpeningHours)
        return res.status(404).json({ msg: "Opening hours not found" });
        res.status(200).json({ body:req.body, msg: "Opening hours updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = openingHourController;
