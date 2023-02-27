const router = require("express").Router();

const DepositController = require("../../controllers/SanClient/DepositController");

// functions
router.route("/sanclients/deposit").post((req, res) => DepositController.create(req, res));
router.route("/sanclients/deposit").get((req, res) => DepositController.getAll(req, res));
router.route("/sanclients/deposit/:id").get((req, res) => DepositController.getById(req, res));
router.route("/sanclients/deposit/:id").delete((req, res) => DepositController.deleteById(req, res));
router.route("/sanclients/deposit/:id").put((req, res) => DepositController.update(req, res));

module.exports = router;