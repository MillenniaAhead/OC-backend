const router = require("express").Router();

const AddPayController = require("../../controllers/SansetSales/AddPayController");

router.route("/sansetsales/pay").post((req, res) => AddPayController.create(req, res));
router.route("/sansetsales/pay").get((req, res) => AddPayController.getAll(req, res));
router.route("/sansetsales/pay/:id").get((req, res) => AddPayController.getById(req, res));
router
  .route("/sansetsales/pay/:id")
  .delete((req, res) => AddPayController.deleteById(req, res));
router.route("/sansetsales/pay/:id").put((req, res) => AddPayController.update(req, res));

module.exports = router;
