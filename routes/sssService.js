const router = require("express").Router();

const SSSServiceController = require("../controllers/SSSServiceController");

// functions
router.route("/sansetsales/service").post((req, res) => SSSServiceController.create(req, res));
router.route("/sansetsales/service").get((req, res) => SSSServiceController.getAll(req, res));
router.route("/sansetsales/service/:id").get((req, res) => SSSServiceController.getById(req, res));
router
  .route("/sansetsales/service/:id")
  .delete((req, res) => SSSServiceController.deleteById(req, res));
router.route("/sansetsales/service/:id").put((req, res) => SSSServiceController.update(req, res));

module.exports = router;
