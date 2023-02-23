const { Appointments: AppointmentsModel } = require("../../models/NewSale/Appointments");

const AppointmentsController = {
  create: async (req, res) => {
    try {
      const response = await AppointmentsModel.create(req.body);
      res.status(200).json({ response, msg: "name created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Appointments = await AppointmentsModel.find();
      res.json(Appointments);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Appointments = await AppointmentsModel.findById(req.params.id);
      if (!Appointments) return res.status(404).json({ msg: "name not found" });
      res.json(Appointments);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Appointments = await AppointmentsModel.findByIdAndDelete(req.params.id);
      if (!Appointments) return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Appointments, msg: "name deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Appointments = {
        name: req.body.name,
      };
      const updatedappointments = await AppointmentsModel.findByIdAndUpdate(
        req.params.id,
        Appointments
      );
      if (!updatedappointments)
        return res.status(404).json({ msg: "name not found" });
      res.status(200).json({ Appointments, msg: "name updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = AppointmentsController;
