const { Appoinment: AppoinmentModal } = require("../../models/SanClient/AppoinmentModal");

const AppoinmentController = {
  create: async (req, res) => {
    try {
      const Appoinment = {
        appoinmet: req.body.appoinmet
       
      };

      const response = await AppoinmentModal.create(Appoinment);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Appoinments = await AppoinmentModal.find();
      res.json(Appoinments);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Appoinments = await AppoinmentModal.findById(req.params.id);
      if (!Appoinments)
        return res.status(404).json({ msg: "Appoinment not found" });
      res.json(Appoinments);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Appoinments = await AppoinmentModal.findByIdAndDelete(req.params.id);
      if (!Appoinments)
        return res.status(404).json({ msg: "Appoinment not found" });
      res.status(200).json({ Appoinments, msg: "Appoinment deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Appoinment = {
        appoinmet: req.body.appoinmet
        
      };
      const updatedAppoinment = await AppoinmentModal.findByIdAndUpdate(
        req.params.id,
        Appoinment
      );
      if (!updatedAppoinment)
        return res.status(404).json({ msg: "Appoinment not found" });
      res.status(200).json({ Appoinment, msg: "Appoinment updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = AppoinmentController;
