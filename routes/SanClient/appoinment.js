const router = require("express").Router();

const AppointmentController = require("../../controllers/SanClient/AppointmentController");

// functions
router.route("/sanclients/clientfeed").post((req, res) => AppointmentController.create(req, res));
router.route("/sanclients/clientfeed").get((req, res) => AppointmentController.getAll(req, res));
router.route("/sanclients/clientfeed/:id").get((req, res) => AppointmentController.getById(req, res));
router.route("/sanclients/clientfeed/:id").delete((req, res) => AppointmentController.deleteById(req, res));
router.route("/sanclients/clientfeed/:id").put((req, res) => AppointmentController.update(req, res));

module.exports = router;