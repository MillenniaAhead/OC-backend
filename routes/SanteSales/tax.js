const router = require("express").Router();

const TaxController = require("../../controllers/SansetSales/TaxController");

// functions
router.route("/sansetsales/ssstaxs").post((req, res) => TaxController.create(req, res));
router.route("/sansetsales/ssstaxs").get((req, res) => TaxController.getAll(req, res));
router.route("/sansetsales/ssstaxs/:id").get((req, res) => TaxController.getById(req, res));
router
  .route("/sansetsales/ssstaxs/:id")
  .delete((req, res) => TaxController.deleteById(req, res));
router.route("/sansetsales/ssstaxs/:id").put((req, res) => TaxController.update(req, res));

module.exports = router;
