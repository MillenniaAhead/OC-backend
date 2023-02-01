const router = require("express").Router();

const CalenderController = require("../../controllers/Calender/Calender");

// functions
router.route("/calender").post((req, res) => CalenderController.create(req, res));
router.route("/calender").get((req, res) => CalenderController.getAll(req, res));
router.route("/calender/:id").get((req, res) => CalenderController.getById(req, res));
router.route("/calender/:id").delete((req, res) => CalenderController.deleteById(req, res));
router.route("/calender/:id").put((req, res) => CalenderController.update(req, res));

module.exports = router;