const router = require("express").Router();

const advancePricingController = require("../controllers/advancePricingController");

// functions
router.route("/advancePricing").post((req, res) => advancePricingController.create(req, res));
router.route("/advancePricing").get((req, res) => advancePricingController.getAll(req, res));
router.route("/advancePricing/:id").get((req, res) => advancePricingController.getById(req, res));
router
  .route("/advancePricing/:id")
  .delete((req, res) => advancePricingController.deleteById(req, res));
router.route("/advancePricing/:id").put((req, res) => advancePricingController.update(req, res));

module.exports = router;
