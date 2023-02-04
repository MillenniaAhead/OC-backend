const router = require("express").Router();

const openingHourController = require("../../controllers/anu-team/openingHourController");

// functions
router.route("/openingHours").post((req, res) => openingHourController.create(req, res));
router.route("/openingHours").get((req, res) => openingHourController.getAll(req, res));
router.route("/openingHours/:id").get((req, res) => openingHourController.getById(req, res));
router.route("/openingHours/:id").delete((req, res) => openingHourController.deleteById(req, res));
router.route("/openingHours/:id").put((req, res) => openingHourController.update(req, res));

module.exports = router;
