const router = require("express").Router();

const SetupController = require("../../controllers/NewSale/Setup");

// functions
router.route("/setup").post((req, res) => SetupController.create(req, res));
router.route("/setup").get((req, res) => SetupController.getAll(req, res));
router.route("/setup/:id").get((req, res) => SetupController.getById(req, res));
router.route("/setup/:id").delete((req, res) => SetupController.deleteById(req, res));
router.route("/setup/:id").put((req, res) => SetupController.update(req, res));

module.exports = router;