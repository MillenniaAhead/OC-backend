const router = require("express").Router();

const CashController = require("../../controllers/SansetSales/CashController");

router.route("/sansetsales/cash").post((req, res) => CashController.create(req, res));
router.route("/sansetsales/cash").get((req, res) => CashController.getAll(req, res));
router.route("/sansetsales/cash/:id").get((req, res) => CashController.getById(req, res));
router.route("/sansetsales/cash/:id").delete((req, res) => CashController.deleteById(req, res));
router.route("/sansetsales/cash/:id").put((req, res) => CashController.update(req, res));

module.exports = router;
