const router = require("express").Router();

const AppointmentsController = require("../../controllers/NewSale/Appointments");

// functions
router.route("/appointments").post((req, res) => AppointmentsController.create(req, res));
router.route("/appointments").get((req, res) => AppointmentsController.getAll(req, res));
router.route("/appointments/:id").get((req, res) => AppointmentsController.getById(req, res));
router.route("/appointments/:id").delete((req, res) => AppointmentsController.deleteById(req, res));
router.route("/appointments/:id").put((req, res) => AppointmentsController.update(req, res));

module.exports = router;