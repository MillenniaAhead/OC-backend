const router = require("express").Router();

const commissionController = require("../../controllers/anu-team/commissionController");

// functions
router.route("/commissions").post((req, res) => commissionController.create(req, res));
router.route("/commissions").get((req, res) => commissionController.getAll(req, res));
router.route("/commissions/:id").get((req, res) => commissionController.getById(req, res));
router.route("/commissions/:id").delete((req, res) => commissionController.deleteById(req, res));
router.route("/commissions/:id").put((req, res) => commissionController.update(req, res));

module.exports = router;
