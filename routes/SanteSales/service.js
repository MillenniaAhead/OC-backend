const router = require("express").Router();

const ServiceController = require("../../controllers/SansetSales/ServiceController");

// functions
router.route("/sansetsales/service").post((req, res) => ServiceController.create(req, res));
router.route("/sansetsales/service").get((req, res) => ServiceController.getAll(req, res));
router.route("/sansetsales/service/:id").get((req, res) => ServiceController.getById(req, res));
router
  .route("/sansetsales/service/:id")
  .delete((req, res) => ServiceController.deleteById(req, res));
router.route("/sansetsales/service/:id").put((req, res) => ServiceController.update(req, res));

module.exports = router;
