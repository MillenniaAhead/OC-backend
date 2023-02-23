const router = require("express").Router();

const CheckoutController = require("../../controllers/NewSale/Checkout");

// functions
router.route("/checkout").post((req, res) => CheckoutController.create(req, res));
router.route("/checkout").get((req, res) => CheckoutController.getAll(req, res));
router.route("/checkout/:id").get((req, res) => CheckoutController.getById(req, res));
router.route("/checkout/:id").delete((req, res) => CheckoutController.deleteById(req, res));
router.route("/checkout/:id").put((req, res) => CheckoutController.update(req, res));

module.exports = router;