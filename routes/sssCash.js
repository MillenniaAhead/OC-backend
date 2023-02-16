const router = require("express").Router();

const SSSCashPayController = require("../controllers/SSSCashPayController");

router.route("/sansetsales/cash").post((req, res) => SSSCashPayController.create(req, res));
router.route("/sansetsales/cash").get((req, res) => SSSCashPayController.getAll(req, res));
router.route("/sansetsales/cash/:id").get((req, res) => SSSCashPayController.getById(req, res));
router.route("/sansetsales/cash/:id").delete((req, res) => SSSCashPayController.deleteById(req, res));
router.route("/sansetsales/cash/:id").put((req, res) => SSSCashPayController.update(req, res));

module.exports = router;
