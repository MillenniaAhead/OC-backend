const router = require("express").Router();

const SSSAddPayController = require("../controllers/SSSAddPayController");

router.route("/sansetsales/pay").post((req, res) => SSSAddPayController.create(req, res));
router.route("/sansetsales/pay").get((req, res) => SSSAddPayController.getAll(req, res));
router.route("/sansetsales/pay/:id").get((req, res) => SSSAddPayController.getById(req, res));
router
  .route("/sansetsales/pay/:id")
  .delete((req, res) => SSSAddPayController.deleteById(req, res));
router.route("/sansetsales/pay/:id").put((req, res) => SSSAddPayController.update(req, res));

module.exports = router;
