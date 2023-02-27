const router = require("express").Router();

const InvoiceController = require("../../controllers/SansetSales/InvoiceController");

// functions
router.route("/sansetsales/invoice").post((req, res) => InvoiceController.create(req, res));
router.route("/sansetsales/invoice").get((req, res) => InvoiceController.getAll(req, res));
router.route("/sansetsales/invoice/:id").get((req, res) => InvoiceController.getById(req, res));
router.route("/sansetsales/invoice/:id").delete((req, res) => InvoiceController.deleteById(req, res));
router.route("/sansetsales/invoice/:id").put((req, res) => InvoiceController.update(req, res));

module.exports = router;
