const { NewAppointment : NewAppointmentModel} = require("../../models/anu-appointment/NewAppointment");

const newAppointmentController = {
  create: async (req, res) => {
    try {
      const { date, service, duration, team_member } = req.body

      const response = await NewAppointmentModel.create(req.body);
      res.status(200).json({ response, msg: "New appointment created successfully" }); 
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const newAppointments = await NewAppointmentModel.find();
      res.json(newAppointments);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const newAppointments = await NewAppointmentModel.findById(req.params.id);
      if (!newAppointments)
        return res.status(404).json({ msg: "Appointment not found" });
        res.json(newAppointments);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const newAppointments = await NewAppointmentModel.findByIdAndDelete(req.params.id);
      if (!newAppointments)
        return res.status(404).json({ msg: "Appointment not found" });
        res.status(200).json({ newAppointments, msg: "Appointment deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const updatedNewAppoitments = await NewAppointmentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (!updatedNewAppoitments)
        return res.status(404).json({ msg: "Appointment not found" });
        res.status(200).json({ data:req.body, msg: "Appointment updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = newAppointmentController;
