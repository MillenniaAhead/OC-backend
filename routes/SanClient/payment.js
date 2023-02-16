const router = require("express").Router();

const PaymentController = require("../../controllers/SanClient/PaymentController");

// functions
router.route("/sanclients/payment").post((req, res) => PaymentController.create(req, res));
router.route("/sanclients/payment").get((req, res) => PaymentController.getAll(req, res));
router.route("/sanclients/payment/:id").get((req, res) => PaymentController.getById(req, res));
router.route("/sanclients/payment/:id").delete((req, res) => PaymentController.deleteById(req, res));
router.route("/sanclients/payment/:id").put((req, res) => PaymentController.update(req, res));

module.exports = router;