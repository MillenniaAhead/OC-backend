const { Calender: CalenderModel } = require("../../models/Calender/Calender");

const calenderController = {
  create: async (req, res) => {
    try {
      const calender = {
        discription: req.body.discription
      };

      const response = await CalenderModel.create(calender);
      res.status(200).json({ response, msg: "discription created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Calender = await CalenderModel.find();
      res.json(Calender);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Calender = await CalenderModel.findById(req.params.id);
      if (!Calender)
        return res.status(404).json({ msg: "discription not found" });
      res.json(Calender);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Calender = await CalenderModel.findByIdAndDelete(req.params.id);
      if (!Calender)
        return res.status(404).json({ msg: "discription not found" });
      res.status(200).json({ Calender, msg: "discription deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Calender = {
        discription: req.body.discription
      };
      const updatedcalender = await CalenderModel.findByIdAndUpdate(
        req.params.id,
        Calender
      );
      if (!updatedcalender)
        return res.status(404).json({ msg: "discription not found" });
      res.status(200).json({ Calender, msg: "discription updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = calenderController;