const router = require("express").Router();

const SanSetSalesController = require("../controllers/SanSetSalesController");

// functions
router.route("/sansetsales").post((req, res) => SanSetSalesController.create(req, res));
router.route("/sansetsales").get((req, res) => SanSetSalesController.getAll(req, res));
router.route("/sansetsales/:id").get((req, res) => SanSetSalesController.getById(req, res));
router.route("/sansetsales/:id").delete((req, res) => SanSetSalesController.deleteById(req, res));
router.route("/sansetsales/:id").put((req, res) => SanSetSalesController.update(req, res));

module.exports = router;
