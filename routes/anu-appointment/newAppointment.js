const router = require('express').Router()

const newAppointmentController = require("../../controllers/anu-appointment/newAppointmentController");

router.route("/newAppointments").post((req, res) => newAppointmentController.create(req, res));
router.route("/newAppointments").get((req, res) => newAppointmentController.getAll(req, res));
router.route("/newAppointments/:id").delete((req, res) => newAppointmentController.deleteById(req, res));
router.route("/newAppointments/:id").put((req, res) => newAppointmentController.update(req, res));
router.route("/newAppointments/:id").get((req, res) => newAppointmentController.getById(req, res));

module.exports = router;