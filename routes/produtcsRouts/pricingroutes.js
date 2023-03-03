const PricingController = require("../../controllers/ProductsControler/PricingController");

const router = require("express").Router();

router.route("/pricing").post((req, res) => PricingController.create(req, res));
router.route("/pricing").get((req, res) => PricingController.getAll(req, res));
router.route("/pricing/:id")
.delete((req, res) => PricingController.deleteById(req, res));
router.route("/pricing/:id").get((req, res) => PricingController.getById(req, res));



module.exports = router;